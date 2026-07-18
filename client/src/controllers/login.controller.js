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

        // Catch user inputs
        const user = {
            email: userEmail.value.trim(),
            password: userPassword.value
        };
        
        // Validations
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
                // Extract the user from server
                const dbUser = responseData.user || {};

                // local storage
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