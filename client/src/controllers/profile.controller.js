import { router } from "../router/router";
import { getSession, saveSession } from "../services/auth.service";
import { updateUser, verifyUser } from "../services/users.service";



export const profileControllers = () => {

    let currentUser = getSession()
    

    const profileFormPersonal = document.getElementById("profile-form-personal");
    const profileFormSecurity = document.getElementById("profile-form-security");

    profileFormPersonal.addEventListener("submit", async(e) => {
        e.preventDefault();

        const nameInput = profileFormPersonal.name.value.trim();
        const emailInput = profileFormPersonal.email.value.trim();
        const lastNameInput = profileFormPersonal.lastName.value.trim();

        const [ userExists ] = await verifyUser(emailInput)   
        
        if ((emailInput !== currentUser.email) && userExists) {
            alert(`${emailInput} ya está en uso, prueba con otro`)
            return
        }


        try {
            currentUser.name = nameInput;
            currentUser.lastName = lastNameInput;
            currentUser.email = emailInput;

            await updateUser(currentUser.id, currentUser);
            
            // is used to update the session data in localStorage after the user information has been updated successfully.;
            saveSession(currentUser) 
            alert("Datos actualizados correctamente");
            router(location.pathname);
        } catch (error) {
            console.error(error);
            alert("Error al actualizar los datos");
        }

    });

    profileFormSecurity.addEventListener("submit", (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para actualizar la contraseña del usuario
        console.log("Contraseña actualizada");
    });

}