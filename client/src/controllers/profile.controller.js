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
        const lastNameInput = profileFormPersonal.lastName.value.trim();

        const [ userExists ] = await verifyUser(emailInput)   
        
        if ((emailInput !== currentUser.email) && userExists) {
            
            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${emailInput} ya está en uso, prueba con otro!`
            });

            router(location.pathname);
            return
        };

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

        try {
            currentUser.password = confirnNewPassword.value;

            await updateUser(currentUser.id, currentUser);

            saveSession(currentUser);

            await Swal.fire({
                icon: "success",
                title: "Actualizado",
                text: "Tus contraseña ha sido actualizada correctamente"
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
        
        removeUser(currentUser.id);
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