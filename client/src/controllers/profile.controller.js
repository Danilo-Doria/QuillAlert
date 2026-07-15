/*
Controller: profile.controller.js
Purpose: Manage user profile interactions: personal info update, password change, and account deletion.
Functions:
    - `profileControllers()` — initializes form listeners, validates inputs, updates session data,
        and calls `updateUser` / `removeUser` as needed.
Notes: Uses `getSession`, `saveSession`, and expects form elements with ids used inside this file.
*/
import { router } from "../router/router";
import { getSession, removeSession, saveSession } from "../services/auth.service";
import { removeUser, updateUser, verifyUser } from "../services/users.service";
import Swal from 'sweetalert2';

export const profileControllers = () => {

        let currentUser = getSession();
    
    const profileFormPersonal = document.getElementById("profile-form-personal");
    const profileFormSecurity = document.getElementById("profile-form-security");
    const profileDeleteAccount = document.getElementById("delete-account-btn");

    profileFormPersonal.addEventListener("submit", async(e) => {
        e.preventDefault();

        const nameInput = profileFormPersonal.name.value.trim();
        const emailInput = profileFormPersonal.email.value.trim();
        const lastNameInput = profileFormPersonal.last_name.value.trim();
       
        if (!nameInput || !emailInput) {
            await Swal.fire({ icon: 'error', title: 'Datos incompletos', text: 'Nombre y correo son requeridos.' });
            return;
        }

        // Check whether the provided email is already used by another account.
        // If the user changed their email, ensure uniqueness.
        const userExists = await verifyUser(emailInput);
      
        if ((emailInput !== currentUser.email) && userExists) {
            await Swal.fire({ icon: "error", title: "Oops...", text: `${emailInput} ya está en uso, prueba con otro!` });
            router(location.pathname);
            return
        };

        // Update currentUser object and persist changes in backend and local session.
        try {
            currentUser.name = nameInput;
            currentUser.last_name = lastNameInput;
            currentUser.email = emailInput;

            // updateUser expects (id, nuevosDatos)
            await updateUser(currentUser.id, currentUser);

            // Update local session after successful server update.
            saveSession(currentUser);

            await Swal.fire({ icon: "success", title: "Actualizado", text: "Tus datos han sido actualizados correctamente" });
            router(location.pathname);

        } catch (error) {
            console.error(error);
            await Swal.fire({ icon: "error", title: "Oops...", text: "Error al actualizar los datos!" });
        }

    });

    profileFormSecurity.addEventListener("submit", async(e) => {
        e.preventDefault();
        
        const newPassword = document.getElementById("new-password");
        const confirnNewPassword = document.getElementById("confirn-new-password");
       
        if (newPassword.value !== confirnNewPassword.value) {

            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Verifica que las contraseñas sean iguales!`
            });

            router(location.pathname);
            return
        }

        // Password change flow:
        // 1. Ensure the two fields match
        // 2. Enforce minimum length
        // 3. Update the currentUser and persist via `updateUser`
        // 4. Refresh the local session with `saveSession`
        try {
            if (confirnNewPassword.value.length < 6) {
                await Swal.fire({ icon: 'error', title: 'Contraseña débil', text: 'La contraseña debe tener al menos 6 caracteres.' });
                router(location.pathname);
                return;
            }

            currentUser.password = confirnNewPassword.value;

            await updateUser(currentUser.id, currentUser);

            // Reflect the change immediately in the local session
            saveSession(currentUser);

            await Swal.fire({ icon: "success", title: "Actualizado", text: "Tus contraseña ha sido actualizada correctamente" });
            router(location.pathname);

        } catch (error) {
            console.error(error);
            await Swal.fire({ icon: "error", title: "Oops...", text: "Error al actualizar los datos!" });
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
        
        // If the user confirms deletion, call the users service to remove account,
        // clear the local session and navigate to the home page. Errors are shown via alerts.
        if (result.isConfirmed) {
            try {
                await removeUser(currentUser.id);
                removeSession();

                await Swal.fire({ icon: 'success', title: 'Cuenta eliminada', text: 'Tu cuenta ha sido eliminada correctamente.' });
                router('/');
            } catch (error) {
                console.error(error);
                await Swal.fire({ icon: 'error', title: 'Error', text: 'No se pudo eliminar la cuenta.' });
            }
        }
    });
};