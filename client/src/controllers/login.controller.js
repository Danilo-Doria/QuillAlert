import { saveSession } from '../services/auth.service';
import { router } from '../router/router';
import Swal from 'sweetalert2'
import { verifyUser } from '../services/users.service';

export function loginAuth() {
    const loginForm = document.getElementById("login-form");
    const userEmail = document.getElementById("user-email");
    const userPassword = document.getElementById("user-password");

    loginForm.addEventListener('submit', async(e) => {
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
        };

        const [ userExists ] = await verifyUser(user.email, user.password);

        if (!userExists) {
            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Credenciales inválidas!"
            });
            return;
        }

        saveSession(userExists);
        router("/panel")

    })
}