import { router } from "../router/router";
import { removeSession } from "../services/auth.service";
import Swal from "sweetalert2";

// in this function we get the links to navigate through the page without reload it
export const navigation = () => {
    const navigationLinks = document.querySelectorAll('.navigation');
    
    navigationLinks.forEach(link => {
        link.addEventListener('click', async(e) => {
            e.preventDefault();
            const path = link.getAttribute('href');

            if (link.id == "logout") {
                const result = await Swal.fire({
                    title: "¿Desea cerrar la sesión?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Sí",
                    cancelButtonText: "No",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    reverseButtons: true
                });
                        
                if (result.isConfirmed) {
                    removeSession();
                    router(path);
                };
                
                return
            }
            router(path);
        })
    })
}