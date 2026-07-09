import { saveSession } from '../services/auth.service';
import Swal from 'sweetalert2'

export function loginAuth() {
    const loginForm = document.getElementById("login-form");
    const userEmail = document.getElementById("user-email");
    const userPassword = document.getElementById("user-password");

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const user = {
            email: userEmail.value.trim(),
            password: userPassword.value,
            isAdmin: false
        };

        if (!user.email || !user.password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Necesitas ingresar datos correctos!"
            });
            return;
        };

        saveSession(user);

    })
}