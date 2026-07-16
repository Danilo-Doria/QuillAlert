
export function createReport() {
    const createReportBtn = document.getElementById("create-report-btn");
    const modalForm = document.getElementById("report-form");
    if (!modalForm) return;

    const isEditing = !!reportData;
    const isAdmin = getSession().role == "alcaldia";

    modalForm.classList.remove("hidden");
    modalForm.classList.add("flex");

    const html = isAdmin ? adminFormHtml() : citizenFormHtml(isEditing);

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
        const statusSelect = document.getElementById("status");

        if (isEditing) {
            statusSelect.value = reportData.status ?? "Pendiente";
        }

        reportForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            if (!isEditing || !reportData?.id) {
               
                console.error("No hay un reporte válido para actualizar el estado.");
                return;
            }

            await updateStatusReports(reportData.id, statusSelect.value);

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
        document.getElementById("title").value = reportData.title ?? "";
        document.getElementById("description").value = reportData.description ?? "";

        if (reportData.category) {
            document.getElementById("category").value = reportData.category;
        }

        // reportData.location puede venir como objeto o como string JSON
        // (por ejemplo si viene de btn.dataset.location)
        let location = reportData.location;
        if (typeof location === "string") {
            try {
                location = JSON.parse(location);
            } catch {
                location = null;
            }
        }

        if (location?.gps) {
            coords = { lat: location.gps.latitud, lng: location.gps.longitud };
            locationStatus.textContent = `Ubicación guardada: ${coords.lat}, ${coords.lng}`;
        } else if (location?.manual) {
            document.getElementById("location").value = location.manual;
            locationContainer.classList.remove("hidden");
            locationStatus.textContent = "Ubicación guardada manualmente.";
        }

        // La foto NO se precarga (a propósito, por ahora)
    }

        // Open Camera
        openCameraBtn.addEventListener("click", async () => {
            try {
                // Strean is an object "MediaStream"
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

        // Stop camera and clean modal  
        function closeModal() {
            if (stream) {
                //getTracks return an array with video or audio
                stream.getTracks().forEach(track => track.stop());
                stream = null;
            }
            modalForm.classList.remove("flex");
            modalForm.classList.add("hidden");
            modalForm.innerHTML = "";
        }

        // Send Report
        reportForm.addEventListener("submit", async(e) => {
            e.preventDefault();

        // 1. Extraer el Base64 de la foto (si existe)
        const photoBase64 = !preview.classList.contains("hidden") ? preview.src : null;

        // 2. Capturar la dirección manual si el usuario la escribió
        const manualLocationInput = document.getElementById("location").value.trim();

        const newReportData = {
            title: document.getElementById("title").value.trim(),
            description: document.getElementById("description").value.trim(),
            category: document.getElementById("category").value,
            status: isEditing ? (reportData.status ?? "Pendiente") : "Pendiente",
            // photo: photoBase64,
            location: {
                gps: coords ? { latitud: coords.lat, longitud: coords.lng } : null,
                manual: manualLocationInput || null
            },
            creationDate: isEditing ? reportData.creationDate : new Date().toISOString().split('T')[0],
            userId: getSession().id
        };

            console.log(reporteData);

            //agregar sweetalert
            closeModal();
        });

        // close report modal
        const cancelBtn2 = document.getElementById("cancel-btn");
        cancelBtn2.addEventListener("click", () => {
            closeModal();
        });
};
