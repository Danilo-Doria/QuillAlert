/*
Controller: register.controller.js
Purpose: Handle user registration. Validates required fields, email format, password strength,
and uniqueness before calling `createUser`. On success, shows feedback and navigates to the login page.
Exports: `registerAuth()` — attaches the submit listener to the registration form.
Notes: Expects DOM elements with ids `register-form`, `user-name`, `user-last-name`, `user-email`, `user-password`.
*/
import Swal from 'sweetalert2'
import { createUser, verifyUser } from '../services/users.service';
import { router } from '../router/router';
import {ROLES} from '../types/roles'

export function registerAuth() {
    const registerForm = document.getElementById("register-form");
    const userName = document.getElementById("user-name");
    const userLastName = document.getElementById("user-last-name");
    const userEmail = document.getElementById("user-email");
    const userPassword = document.getElementById("user-password");

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        // Build the user payload from the form inputs.
        // `role_id` will be assigned by `createUser` if a default role exists.
        const user = {
            name: userName.value.toLowerCase().trim(),
            last_name: userLastName.value.toLowerCase().trim(),
            email: userEmail.value.trim(),
            password: userPassword.value,
            role_id: null
        };

        // Basic required fields
        if (!user.name || !user.last_name || !user.email || !user.password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Necesitas ingresar datos correctos!"
            });
            return;
        };

        // Email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user.email)) {
            Swal.fire({ icon: 'error', title: 'Email inválido', text: 'Ingresa un correo válido.' });
            return;
        }

        // Password minimum length
        if (user.password.length < 6) {
            Swal.fire({ icon: 'error', title: 'Contraseña débil', text: 'La contraseña debe tener al menos 6 caracteres.' });
            return;
        }

        // Check email uniqueness by attempting to fetch a user with that email.
        // `verifyUser(email)` in existence mode returns the user object when found, otherwise `false`.
        const existing = await verifyUser(user.email);
        if (existing) {
            Swal.fire({ icon: 'error', title: 'Email en uso', text: 'Ya existe una cuenta con ese correo.' });
            return;
        }
        

        // Attempt to create the user via the users service. Errors are surfaced to the user via alerts.
        try {
            await createUser(user);
            Swal.fire({ icon: "success", title: "Usuario creado exitosamente!" });
        } catch (error) {
            Swal.fire({ icon: "error", title: "Oops...", text: "Error al crear usuario" });
        }

        router("/login")

    })
}