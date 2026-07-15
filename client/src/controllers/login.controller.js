/*
Controller: login.controller.js
Purpose: Handle login form submission. Validates inputs, calls `verifyUser(email, password)` to
authenticate the user, saves the session using `saveSession`, and navigates to the panel on success.
Exports: `loginAuth()` — attaches the submit listener to the login form.
Notes: Expects DOM elements with ids `login-form`, `user-email`, and `user-password`.
*/
import { saveSession } from '../services/auth.service';
import { router } from '../router/router';
import Swal from 'sweetalert2'
import { verifyUser } from '../services/users.service';

export function loginAuth() {
    const loginForm = document.getElementById("login-form");
    const userEmail = document.getElementById("user-email");
    const userPassword = document.getElementById("user-password");

    // Attach submit handler to the login form.
    // Steps:
    // 1. Prevent default submission
    // 2. Build `user` object with `email` and `password`
    // 3. Validate presence of fields
    // 4. Call `verifyUser(email, password)` to authenticate against backend
    // 5. If authenticated, persist session with `saveSession` and navigate to `/panel`
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

        // Call the users service to verify credentials.
        // `verifyUser` returns the user object on success or `false` on failure.
        const userExists = await verifyUser(user.email, user.password);

        // If authentication failed, show an error and abort.
        if (!userExists) {
            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Credenciales inválidas!"
            });
            return;
        }

        // Persist the authenticated user in localStorage and navigate to the panel.
        saveSession(userExists);
        router("/panel")

    })
}