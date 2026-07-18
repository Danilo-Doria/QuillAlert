import { router } from "../router/router";
import { getSession, removeSession, saveSession } from "../services/auth.service";
import { removeUser, updateUser, updatePassword, checkEmailExists, verifyUser } from "../services/users.service";
import Swal from 'sweetalert2';

export const profileControllers = () => {

    let currentUser = getSession();
    
    // Id's from profile view
    const profileFormPersonal = document.getElementById("profile-form-personal");
    const profileFormSecurity = document.getElementById("profile-form-security");
    const profileDeleteAccount = document.getElementById("delete-account-btn");

    profileFormPersonal.addEventListener("submit", async(e) => {
        e.preventDefault();

        const nameInput = profileFormPersonal.name.value.trim();
        const emailInput = profileFormPersonal.email.value.trim();
        const lastNameInput = profileFormPersonal.lastName.value.trim();

        if (emailInput !== currentUser.email) {
        const emailExits = await checkEmailExists(emailInput);
        
        if (emailExits) {
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
            
            // Save local storage
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
        
        // Inputs
        const currentPassword = document.getElementById("current-password").value;
        const newPassword = document.getElementById("new-password").value;
        const confirmNewPassword = document.getElementById("confirn-new-password").value;
        
        // Validate both passwords are the same
        if (newPassword !== confirmNewPassword) {
            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Verifica que las nuevas contraseñas sean iguales!"
            });
            return;
        }

        try {
            // Verify current password by logging in via Supabase Auth
            const verifyResult = await verifyUser(currentUser.email, currentPassword);

            // Update password directly in Supabase Auth using the user's token
            await updatePassword(newPassword, verifyResult.token);

            // Refresh the token, and local storage
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