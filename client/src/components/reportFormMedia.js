// components/reportFormMedia.js

export function initReportMedia(initialCoords = null) {
    // ---- Camera References and Location ----
    const openCameraBtn = document.getElementById("openCamera");
    const uploadPhotoLabel = document.getElementById("uploadPhotoLabel");
    const uploadPhotoInput = document.getElementById("uploadPhoto");
    const video = document.getElementById("video");
    const takePhotoBtn = document.getElementById("takePhoto");
    const canvas = document.getElementById("canvas");
    const preview = document.getElementById("preview");
    const locationContainer = document.getElementById("locationContainer");
    const locationStatus = document.getElementById("locationStatus");

    let stream = null;
    let coords = initialCoords; // { lat, lng } o null

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

    return {
        getCoords: () => coords,
        getStream: () => stream,
        setStreamNull: () => { stream = null; }
    };
}