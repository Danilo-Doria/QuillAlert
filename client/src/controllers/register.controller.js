import Swal from 'sweetalert2'
import { createUser } from '../services/users.service';
import { router } from '../router/router';
import { loading } from '../components/loading';

export function registerAuth() {
    const registerForm = document.getElementById("register-form");
    const isLoading = document.querySelector(".loading");        
    const userName = document.getElementById("user-name");
    const userLastName = document.getElementById("user-last-name");
    const userEmail = document.getElementById("user-email");
    const userPassword = document.getElementById("user-password");

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        isLoading.innerHTML = loading()

        const user = {
            name: userName.value.toLowerCase().trim(),
            lastName: userLastName.value.toLowerCase().trim(),
            email: userEmail.value.trim(),
            password: userPassword.value,
            role: "ciudadano" // default role for new users
        };

        if (!user.name || !user.lastName || !user.email || !user.password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Necesitas ingresar datos correctos!"
            });
            return;
        };
        
        try {
            await createUser(user);
            Swal.fire({
                icon: "success",
                title: "Usuario creado exitosamente!"
            });

            router("/login")

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al crear usuario"
            });
            isLoading.textContent = 'Error al crear usuario';
            router("/register")
        }

    })
}