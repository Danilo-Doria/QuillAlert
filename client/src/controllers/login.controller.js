import { saveSession } from '../services/auth.service';
import { router } from '../router/router';
import Swal from 'sweetalert2';
import { verifyUser } from '../services/users.service';

export function loginAuth() {
    const loginForm = document.getElementById("login-form");
    const userEmail = document.getElementById("user-email");
    const userPassword = document.getElementById("user-password");

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const user = {
            email: userEmail.value.trim(),
            password: userPassword.value
        };
        
        if (!user.email || !user.password) {
            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Necesitas ingresar datos correctos!"
            });
            return;
        }

        try {

            const responseData = await verifyUser(user.email, user.password);

            if (responseData) {
                // Extraemos de forma segura el usuario que nos mandó el servidor
                const dbUser = responseData.user || {};

                // Armamos la estructura plana exacta que consumen tus vistas (como panel.js)
                const sessionToSave = {
                    id: dbUser.id || responseData.id,
                    email: dbUser.email || responseData.email,
                    token: responseData.token,
                    role: dbUser.role || 'ciudadano',
                    name: dbUser.name,
                    lastName: dbUser.lastName,
                };

                // Guardamos en el localStorage
                saveSession(sessionToSave); 

                await Swal.fire({
                    icon: "success",
                    title: "¡Bienvenido!",
                    text: `Hola de nuevo`,
                    timer: 1500,
                    showConfirmButton: false
                });

                router("/panel");
            }
        } catch (error) {
            await Swal.fire({
                icon: "error",
                title: "Error de autenticación",
                text: error.message || "No se pudo iniciar sesión."
            });
        }
    });
}