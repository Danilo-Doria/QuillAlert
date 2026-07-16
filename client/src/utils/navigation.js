import { router } from "../router/router";
import { removeSession } from "../services/auth.service";
import Swal from "sweetalert2";

export const navigation = () => {
    // Se registra UNA sola vez, sobre un elemento que siempre existe
    document.addEventListener('click', async (e) => {
        const link = e.target.closest('.navigation');
        if (!link) return; // el clic no fue sobre un link de navegación

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
            }

            return;
        }

        router(path);
    });
};