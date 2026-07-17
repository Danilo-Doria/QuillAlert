import { router } from "../router/router";
import { getSession } from "../services/auth.service";
import { renderReports } from "../services/renderReports.service";
import { consultAllReports, createReports, deleteReports, updateReports, updateStatusReports, uploadReportPhoto } from "../services/report.service";
import Swal from 'sweetalert2'

function openReportModal(reportData = null) {    
    const modalForm = document.getElementById("report-form");
    if (!modalForm) return;

    const isEditing = !!reportData;
    const isAdmin = getSession().role == "alcaldia";

    modalForm.classList.remove("hidden");
    modalForm.classList.add("flex");

    const html = isAdmin ? adminFormHtml() : citizenFormHtml(reportData);

    modalForm.innerHTML = html;

    const reportForm = document.getElementById("create-report-form");
    const cancelBtn = document.getElementById("cancel-btn");

    let stream = null;
    let coords = null; // { lat, lng }

    function closeModal() {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            stream = null;
        }
        modalForm.classList.remove("flex");
        modalForm.classList.add("hidden");
        modalForm.innerHTML = "";
    }

    cancelBtn.addEventListener("click", () => closeModal());

    // Admin Report's

    if (isAdmin) {
        let statusSelectId = document.getElementById("status");

        reportForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            reportData.status_id = parseInt(statusSelectId.value)

            await updateStatusReports(reportData.id, reportData);

            await Swal.fire({
                icon: "success",
                title: "Estado Actualizado",
                text: "El estado del reporte ha sido actualizado exitosamente."
            });

            closeModal();
            router(window.location.pathname);
        });

        return;
    }

    // User Report's

    const openCameraBtn = document.getElementById("openCamera");
    const uploadPhotoLabel = document.getElementById("uploadPhotoLabel");
    const uploadPhotoInput = document.getElementById("uploadPhoto");
    const video = document.getElementById("video");
    const takePhotoBtn = document.getElementById("takePhoto");
    const canvas = document.getElementById("canvas");
    const preview = document.getElementById("preview");
    const locationContainer = document.getElementById("locationContainer");
    const locationStatus = document.getElementById("locationStatus");

    if (isEditing) {
        
        let location = {
            longitude:reportData.longitude,
            latitude:reportData.latitude
        }

        if (location) {
            locationStatus.textContent = `Ubicación guardada: ${location.latitude}, ${location.longitude}`;
        } else if (reportData.address) {
            document.getElementById("location").value = reportData.address;
            locationContainer.classList.remove("hidden");
            locationStatus.textContent = "Ubicación guardada manualmente.";
        }
        
    }

    // Open Camera
    openCameraBtn.addEventListener("click", async () => {
        try {
            /* Es un objeto que contiene los datos brutos de video que vienen de la lente. 
            Lo asignas a video.srcObject para que el usuario vea lo que la cámara 
            está viendo en tiempo real.*/
            stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "environment" }
            });

            video.srcObject = stream;
            video.classList.remove("hidden");
            takePhotoBtn.classList.remove("hidden");
            takePhotoBtn.classList.add("inline-flex");
            openCameraBtn.classList.add("hidden");

        } catch(e) {
            console.error("No se pudo acceder a la cámara:", e);
            uploadPhotoLabel.classList.remove("hidden");
            uploadPhotoLabel.classList.add("inline-flex");
            openCameraBtn.classList.add("hidden");
        }
    });

    function stopCamera() {
        // stream es un conjunto de pistas video/audio
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            stream = null;
        }
    }

    // Take Photo
    takePhotoBtn.addEventListener("click", () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d").drawImage(video, 0, 0); //draw the photo from the live video

        // Convert the canvas img in string base64 (img codified like a text) add put as a source
        preview.src = canvas.toDataURL("image/jpeg");
        preview.classList.remove("hidden");

        video.classList.add("hidden");
        takePhotoBtn.classList.add("hidden");

        // Turn off the camera to save resources
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            stream = null;
        }

        obtainLocation();
    });

    // Upload photo from device (fallback if camera fails)
    uploadPhotoInput.addEventListener("change", (e) => {

        //list of selected files
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        // Read the local file using "FileReader() browser API"
        const reader = new FileReader();

        reader.onload = (e) => {
            preview.src = e.target.result;
            preview.classList.remove("hidden");
        };

        // Read the image and convert in string base64
        reader.readAsDataURL(file);

        obtainLocation();
    });

    // Automatic Location using Geolocation API
    function obtainLocation() {

        if (!navigator.geolocation) {
            locationStatus.textContent = "Geolocalización no disponible. Escribe la dirección manualmente.";

            locationContainer.classList.remove("hidden");

            return;
        }

        locationStatus.textContent = "Obteniendo ubicación...";

        //getCurrentPosition() ask browser and system the current gps
        navigator.geolocation.getCurrentPosition(
            (position) => {
                coords = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                locationStatus.textContent = `Ubicación detectada: ${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`;

                locationContainer.classList.add("hidden");

            },
            (error) => {
                console.error("Error de geolocalización:", error);

                locationStatus.textContent = "No se pudo obtener la ubicación. Escríbela manualmente.";

                locationContainer.classList.remove("hidden");
            }
        );
    }    

    // Send Report
    reportForm.addEventListener("submit", async(e) => {
        e.preventDefault();                 

        try {
            // 1. OBTENCIÓN DE LA IMAGEN
            const uploadPhotoInput = document.getElementById("uploadPhoto");
            const file = uploadPhotoInput.files[0];
            let photoUrl = ""; 

            if (file) {
                // Caso A: Subir archivo seleccionado manualmente
                photoUrl = await uploadReportPhoto(file);

                // Caso B: Si la imagen proviene de la cámara (previsualizada como Base64).
                // Validamos que exista una previsualización activa en el DOM
            } else if (!preview.classList.contains("hidden") && preview.src.startsWith("data:image")) {
                // Convertimos la cadena Base64 (texto) a un objeto Blob (binario).
                // Esto es necesario porque los servicios de almacenamiento (Storage) 
                // esperan datos binarios, no strings de texto codificados.
                const response = await fetch(preview.src);
                const blob = await response.blob();

                // Creamos un objeto File artificial para mantener la consistencia con el Caso A,
                // permitiendo que uploadReportPhoto maneje ambos casos con la misma lógica.
                const cameraFile = new File([blob], "camera-photo.jpg", { type: "image/jpeg" });

                // guardar la imagen en supabase storage para obtener la url publica
                photoUrl = await uploadReportPhoto(cameraFile);
            }

           

            // Mapeo de categorías
            const categoryMap = { "Infraestructura": 1, "Alumbrado": 2, "Limpieza urbana": 3, "Movilidad": 4, "Servicios públicos": 5, "Seguridad": 6 };

            // Crear el reporte con la URL de la imagen obtenida
            const newReportData = {
                title: document.getElementById("title").value.trim(),
                description: document.getElementById("description").value.trim(),
                image_url: photoUrl ? photoUrl : reportData.image_url,
                category_id: parseInt( document.getElementById("category").value) || 1,
                status_id: 1,
                city_hall_id: 1,
                user_id: getSession().id,
                address: document.getElementById("location").value.trim() || null,
                latitude: coords ? coords.lat : reportData.latitude,
                longitude: coords ? coords.lng : reportData.longitude,
                creation_date: !isEditing ? new Date().toISOString() : reportData.creation_date
            };
            
            // Enviar a base de datos
            if (isEditing) {
                await updateReports(reportData.id, newReportData);
                stopCamera()
            } else {
                await createReports(newReportData);
                stopCamera()
            }

            await Swal.fire({
                icon: "success",
                title: isEditing ? "Reporte Actualizado" : "Reporte Creado",
                text: `Tu reporte ha sido ${isEditing ? "actualizado" : "creado"} exitosamente.`
            });

            stopCamera()
            closeModal();
            router(window.location.pathname);

        } catch (error) {
            console.error("Error completo:", error);
            Swal.fire({ icon: "error", title: "Error", text: "No se pudo guardar el reporte." });
            stopCamera()
        }
    });
}

// Reports Form for admin

function adminFormHtml(statusReportId = null) {

    const statuses = [ "Pendiente", "En revisión", "Rechazado", "Completado" ];

    return `
    <section class="w-full max-w-2xl max-h-[95vh] overflow-y-auto rounded-lg border border-blue-100 bg-white p-5">
        <h1 class="mt-3 text-2xl font-black tracking-tight text-slate-900">Editar Reporte</h1>

        <form id="create-report-form" class="mt-4 grid gap-5">
            <div>
                <label class="mb-2 block text-sm font-medium text-slate-700" for="status">Estado</label>
                <select id="status" class="w-full rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 focus:border-blue-400 focus:outline-none">
                    ${statuses.map((status, id) => `<option ${statusReportId == id+1 ? 'selected':''} value="${id+1}">${status}</option>`)}

                </select>
            </div>

            <div class="flex flex-col gap-3 pt-2 sm:flex-row">
                <button type="submit" class="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-500 cursor-pointer">Actualizar Estado</button>
                <button id="cancel-btn" type="reset" class="inline-flex items-center justify-center rounded-2xl border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50 cursor-pointer">Cancelar</button>
            </div>
        </form>
    </section>`;
}

// Reports Form for regular user
function citizenFormHtml(report = null) {

    const categories = [ "Infraestructura", "Alumbrado", "Limpieza urbana", "Movilidad", "Servicios públicos", "Seguridad" ];

    return `
    <section class="w-full max-w-2xl max-h-[95vh] overflow-y-auto rounded-lg border border-blue-100 bg-white p-5">
        <h1 class="mt-3 text-2xl font-black tracking-tight text-slate-900">${report ? "Editar Reporte" : "Crear Nuevo Reporte"}</h1>

        <form id="create-report-form" class="mt-4 grid gap-5">
            <div class="grid gap-5 md:grid-cols-2">
                <div>
                    <label class="mb-2 block text-sm font-medium text-slate-700" for="title">Titulo</label>
                    <input id="title" value="${report?.title ?? ''}" type="text" required placeholder="(Ej. Semáforo defectuoso)" class="w-full rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none" />
                </div>

                <div>
                    <label class="mb-2 block text-sm font-medium text-slate-700" for="category">Categoria</label>
                    <select id="category" class="w-full rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 focus:border-blue-400 focus:outline-none">
                        ${categories.map((category, id) => `<option ${report?.category_id == id+1 ? 'selected':''} value="${id+1}">${category}</option>`)}
                        
                    </select>
                </div>
            </div>

            <div>
                <label class="mb-2 block text-sm font-medium text-slate-700" for="description">Descripcion</label>
                <textarea id="description" rows="4" placeholder="Describe el problema con el mayor detalle posible" class="w-full rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none">${report?.description ?? ''}</textarea>
            </div>

            <div class="grid gap-5">

                <div>
                    <label class="mb-2 block text-sm font-medium text-slate-700">Evidencia fotográfica</label>

                    <button type="button" id="openCamera" class="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 text-white text-sm font-semibold py-3 hover:bg-blue-500 transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z"></path>
                            <circle cx="12" cy="13" r="4"></circle>
                        </svg>
                        Abrir cámara
                    </button>

                    <label for="uploadPhoto" id="uploadPhotoLabel" class="hidden mt-3 w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-blue-200 bg-blue-50 text-sm font-medium text-slate-500 py-3 cursor-pointer hover:border-blue-400 hover:text-slate-900 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="17 8 12 3 7 8"></polyline>
                            <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                        Subir foto desde el dispositivo
                    </label>

                    <input type="file" id="uploadPhoto" accept="image/*" capture="environment" class="hidden">

                    <video id="video" autoplay playsinline class="hidden mt-3 w-full aspect-video object-cover rounded-2xl border border-blue-100"></video>

                    <button type="button" id="takePhoto" class="hidden mt-3 w-full items-center justify-center gap-2 rounded-2xl bg-amber-500 text-white text-sm font-semibold py-3 hover:bg-amber-400 transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                            <circle cx="12" cy="12" r="8"></circle>
                        </svg>
                        Tomar foto
                    </button>

                    <canvas id="canvas" class="hidden"></canvas>

                    <img id="preview" alt="Vista previa" class="hidden mt-3 w-full aspect-video object-cover rounded-2xl border border-blue-100">
                </div>

                <!-- Ubicación -->
                <div>
                    <label class="mb-2 block text-sm font-medium text-slate-700">Ubicación</label>
                    <p class="text-xs text-slate-500 -mt-1 mb-2">Se detecta automáticamente al tomar la foto. Si falla, escríbela aquí.</p>

                    <div id="locationContainer" class="hidden">
                        <input type="text" id="location" placeholder="Ingrese la dirección manualmente" class="w-full rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none">
                    </div>

                    <p id="locationStatus" class="text-xs text-slate-500 mt-2"></p>
                </div>
            </div>

            <div class="flex flex-col gap-3 pt-2 sm:flex-row">
                <button type="submit" class="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-500 cursor-pointer">${report ? "Actualizar Reporte" : "Guardar Reporte"}</button>

                <button id="cancel-btn" type="reset" class="inline-flex items-center justify-center rounded-2xl border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50 cursor-pointer">Cancelar</button>
            </div>
        </form>
    </section>`;
}

export function createReportModal() {
    const createReportBtn = document.getElementById("create-report-btn");
    const modalForm = document.getElementById("report-form");

    if (!createReportBtn || !modalForm) return;

    createReportBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openReportModal();
    });
}

export async function displayReports() {
    let reports = null;

    if (window.location.pathname == "/all-reports" || window.location.pathname == "/panel") {
        reports = await consultAllReports();
    } else if (window.location.pathname == "/reports") {
        reports = await consultAllReports(getSession().id);
    }
    
    if (!reports) return;

    renderReports(reports.reverse());

    const container = document.getElementById("reports-container") || document.getElementById("table-container");
    
    if (container) {
        container.addEventListener("click", async (e) => {
            
            const deleteBtn = e.target.closest(".delete-report-btn");

            if (deleteBtn) {
                e.preventDefault();
                e.stopPropagation();
                const result = await Swal.fire({
                title: "¿Estás seguro?",
                text: "Esta acción eliminará el reporte.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "Cancelar",
                allowOutsideClick: false,
                allowEscapeKey: false,
                reverseButtons: true
            });

            if (result.isConfirmed) {
                await deleteReports(deleteBtn.dataset.id);
                router(window.location.pathname);
            }
        }

            // Manejo de editar
            const editBtn = e.target.closest(".edit-report-btn");

            if (editBtn) {
                e.preventDefault();
                e.stopPropagation();

                const reportToUpdate = JSON.parse(editBtn.dataset.report)

                openReportModal(reportToUpdate);

            }

        });
    }
}