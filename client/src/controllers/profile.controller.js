import { router } from "../router/router";
import { getSession, removeSession, saveSession } from "../services/auth.service";
import { removeUser, updateUser, updatePassword, checkEmailExists, verifyUser } from "../services/users.service";
import Swal from 'sweetalert2';

export const profileControllers = () => {

    let currentUser = getSession();
    
    // Id's de cada from en profile y el btn delete acc
    const profileFormPersonal = document.getElementById("profile-form-personal");
    const profileFormSecurity = document.getElementById("profile-form-security");
    const profileDeleteAccount = document.getElementById("delete-account-btn");

    profileFormPersonal.addEventListener("submit", async(e) => {
        e.preventDefault();

        const nameInput = profileFormPersonal.name.value.trim();
        const emailInput = profileFormPersonal.email.value.trim();
        const lastNameInput = profileFormPersonal.lastName.value.trim();

        if (emailInput !== currentUser.email) {
        const emailYaExiste = await checkEmailExists(emailInput);
        
        if (emailYaExiste) {
            await Swal.fire({
                icon: "error",
                title: "Email no disponible",
                text: "El correo electrónico ya está registrado. Por favor, usa otro."
            });

            profileFormPersonal.name.value = currentUser.name;
            profileFormPersonal.lastName.value = currentUser.lastName;
            profileFormPersonal.email.value = currentUser.email;
            
            return;
            }
        }

        try {
            currentUser.name = nameInput;
            currentUser.lastName = lastNameInput;
            currentUser.email = emailInput;

            await updateUser(currentUser.id, currentUser);
            
            // is used to update the session data in localStorage after the user information has been updated successfully.
            saveSession(currentUser);

            await Swal.fire({
                icon: "success",
                title: "Actualizado",
                text: "Tus datos han sido actualizados correctamente"
            });
           
            router(location.pathname);

        } catch (error) {
            console.error(error);

            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al actualizar los datos!"
            });

        }

    });

    profileFormSecurity.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        // Obtenemos los valores de los inputs
        const currentPassword = document.getElementById("current-password").value;
        const newPassword = document.getElementById("new-password").value;
        const confirmNewPassword = document.getElementById("confirn-new-password").value;
        
        // Validar que las contraseñas nuevas coincidan
        if (newPassword !== confirmNewPassword) {
            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Verifica que las nuevas contraseñas sean iguales!"
            });
            return;
        }

        try {
            // Verificamos la contraseña actual iniciando sesión contra Supabase Auth
            const verifyResult = await verifyUser(currentUser.email, currentPassword);

            // Actualizamos la contraseña directamente en Supabase Auth,
            // usando el token recién obtenido (no existe columna 'password' en tu tabla 'users')
            await updatePassword(newPassword, verifyResult.token);

            // Refrescamos el token en la sesión guardada, ya que Supabase
            // puede rotar el token al actualizar credenciales
            currentUser.token = verifyResult.token;
            saveSession(currentUser);
            currentUser = getSession();

            await Swal.fire({
                icon: "success",
                title: "Actualizado",
                text: "Tus datos han sido actualizados correctamente"
            });

            router(location.pathname);

        } catch (error) {

            console.error(error);
            await Swal.fire({
                icon: "error",
                title: "Error de seguridad",
                text: "La contraseña actual es incorrecta o no se pudo actualizar."
            });
        }
    });

    profileDeleteAccount.addEventListener("click", async() => {

        const result = await Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción eliminará tu cuenta.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
            allowOutsideClick: false,
            allowEscapeKey: false,
            reverseButtons: true
        });
        
        if (result.isConfirmed) {
        
        await removeUser(currentUser.token);
        removeSession();

        await Swal.fire({
            icon: "success",
            title: "Cuenta eliminada",
            text: "Tu cuenta ha sido eliminada correctamente."
        });

        router("/");
    
        }
    });
};