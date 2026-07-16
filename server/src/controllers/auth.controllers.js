import { supabase, supabaseAdmin } from '../config/supabaseClient.js';

export const registerUser = async (req, res) => {
  // Recibimos los datos tal cual los envía tu register.controller.js del front(client)
  const { name, lastName, email, password } = req.body;

  // Validaciones básicas en el servidor
  if (!name || !lastName || !email || !password) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  try {
    // Crear el usuario en Supabase Auth
    // Supabase se encarga de todo lo difícil: encriptar la contraseña (hashing), manejar tokens y gestionar la sesión.
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email,
      password: password,

      // options.data: Aquí aprovechas para guardar metadatos básicos del usuario dentro del sistema de autenticación.
      options: {
        data: {
          first_name: name,
          last_name: lastName
        }
      }
    });

    if (authError) {
      return res.status(400).json({ error: authError.message });
    }

    const supabaseAuthUUID = authData.user?.id; // El identificador único (UUID) generado por el Auth de Supabase

    if (!supabaseAuthUUID) {
      throw new Error('No se pudo generar el identificador de autenticación.');
    }

    // Insertar el registro en tu tabla pública 'users' de la base de datos
    const { data: dbData, error: dbError } = await supabase
      .from('users') 
      .insert([
        {
          name: name,
          last_name: lastName,
          email: email,
          role_id: 2,
          auth_id: supabaseAuthUUID // Vinculamos el UUID aquí
        }
      ])
      .select();

    if (dbError) {
      throw dbError;
    }

    // Responder al cliente con éxito
    res.status(201).json({
      message: '¡Usuario creado exitosamente!',
      user: dbData[0]
    });

  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: error.message || 'Error interno del servidor.' });
  }
};

// Login user controllers

export const loginUser = async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'El correo y la contraseña son obligatorios.' });
  }

  try {
    // 1. Autenticar en Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });;

    if (error) {
      return res.status(401).json({ error: error.message });
    }

    const { user, session } = data;

    // Buscar datos adicionales en tu tabla 'users'
    const { data: dbUser } = await supabase
      .from('users')
      .select('*')
      .eq('auth_id', user.id)
      .single();

    // RETORNAMOS EL OBJETO PLANO QUE TU FRONTEND YA ESPERA 
    const name = dbUser?.name && dbUser.name.trim() !== "" ? dbUser.name : (user.user_metadata?.first_name || 'Usuario');

    const lastName = dbUser?.last_name && dbUser.last_name.trim() !== "" ? dbUser.last_name : (user.user_metadata?.last_name || '');

    return res.status(200).json({
      message: "Inicio de sesión exitoso",
      token: session.access_token,
      user: {
        id: user.id,
        email: user.email,
        name: name,
        lastName: lastName,
        role: dbUser?.role_id === 2 ? 'ciudadano' : 'alcaldia'
      }
    });

  } catch (error) {
    console.error('Error en el login:', error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

export const updateProfile = async (req, res) => {
  const { id, name, lastName } = req.body;

  // Validar que no vengan vacíos
  if (!id || !name || !lastName) {
    return res.status(400).json({ error: 'El nombre y el apellido son obligatorios.' });
  }

  try {
    // Actualizar en Supabase
    const { data, error } = await supabase
      .from('users')
      .update({ 
        name: name, 
        last_name: lastName
      })
      .eq('auth_id', id) // Buscamos por tu UUID de autenticación
      .select();

    if (error) {
      throw error;
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ error: 'No se encontró el usuario.' });
    }

    // Respuesta exitosa con los datos actualizados
    return res.status(200).json({
      message: 'Perfil actualizado con éxito',
      user: {
        name: data[0].name,
        lastName: data[0].last_name
      }
    });

  } catch (error) {
    console.error('Error al actualizar perfil:', error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

// Actualizar contraseña usando Supabase Auth
export const updatePassword = async (req, res) => {

  const { newPassword } = req.body;
  const authHeader = req.headers.authorization; // "Bearer <access_token>"

  if (!newPassword) {
    return res.status(400).json({ error: 'La nueva contraseña es obligatoria.' });
  }

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No autorizado. Sesión inválida.' });
  }

  const accessToken = authHeader.split(' ')[1];

  try {
    // Validamos el token y averiguamos a qué usuario pertenece
    const { data: { user }, error: getUserError } = await supabase.auth.getUser(accessToken);

    if (getUserError || !user) {
      return res.status(401).json({ error: 'Sesión inválida o expirada.' });
    }

    // 2. Con el cliente admin (service_role) actualizamos la contraseña por ID
    const { data, error } = await supabaseAdmin.auth.admin.updateUserById(
      user.id,
      { password: newPassword }
    );

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({
      message: 'Contraseña actualizada con éxito',
      user: { id: data.user.id, email: data.user.email }
    });

  } catch (error) {
    console.error('Error al actualizar la contraseña:', error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

export const checkEmail = async (req, res) => {
    const { email } = req.query;

    try {
        // Consultar a Supabase si el email ya existe
        const { data, error } = await supabase
            .from('users')
            .select('id')
            .eq('email', email);

        if (error) throw error;

        // Si data tiene elementos, el email ya existe (true)
        res.status(200).json({ exists: data.length > 0 });

    } catch (error) {
        console.error("Error al verificar email:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Delete account
export const deleteAccount = async (req, res) => {
  const authHeader = req.headers.authorization; // "Bearer <access_token>"

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No autorizado. Sesión inválida.' });
  }

  const accessToken = authHeader.split(' ')[1];

  try {
    // Validamos el token y obtenemos el usuario autenticado
    const { data: { user }, error: getUserError } = await supabase.auth.getUser(accessToken);

    if (getUserError || !user) {
      return res.status(401).json({ error: 'Sesión inválida o expirada.' });
    }

    // Borramos primero el registro de tu tabla 'users'
    const { error: dbError } = await supabase
      .from('users')
      .delete()
      .eq('auth_id', user.id);

    if (dbError) {
      throw dbError;
    }

    // Borramos el usuario de Supabase Auth (requiere service_role key)
    const { error: authDeleteError } = await supabaseAdmin.auth.admin.deleteUser(user.id);

    if (authDeleteError) {
      throw authDeleteError;
    }

    return res.status(200).json({ message: 'Cuenta eliminada con éxito' });

  } catch (error) {
    console.error('Error al eliminar la cuenta:', error);
    return res.status(500).json({ error: error.message || 'Error interno del servidor.' });
  }
};