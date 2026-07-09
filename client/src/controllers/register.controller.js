import Swal from 'sweetalert2'

export function registerAuth() {
    const registerForm = document.getElementById("register-form");
    const userName = document.getElementById("user-name");
    const userLastName = document.getElementById("user-last-name");
    const userEmail = document.getElementById("user-email");
    const userPassword = document.getElementById("user-password");

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const user = {
            name: userName.value.toLowerCase().trim(),
            lastName: userLastName.value.toLowerCase().trim(),
            email: userEmail.value.trim(),
            password: userPassword.value,
            isUser: true
        };

        if (!user.name || !user.lastName || !user.userEmail || !user.password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Necesitas ingresar datos correctos!"
            });
            return;
        };

    })
}