import { consultAllReports, consultReportsById } from "./report.service";
import { getUserById } from "./users.service";

export async function getReportDetails() {    
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const report = await consultReportsById(id);
    
    const {name, last_name} = await getUserById(report.user_id);

    const fullName = `${name[0].toUpperCase()}${name.slice(1)} ${last_name[0].toUpperCase()}${last_name.slice(1)}`;

    const categoryMap = { 1: "Infraestructura", 2: "Alumbrado", 3: "Limpieza urbana", 4: "Movilidad", 5: "Servicios públicos", 6: "Seguridad" };
    
    const statusMap = { 1: "Pendiente", 2: "En revisión", 3: "Rechazado", 4: "Completado" };

    const getCategoryName = (id) => categoryMap[id] || "Otros";
    const getStatusName = (id) => statusMap[id] || "Desconocido";

    document.getElementById("user").textContent = `Creado por ${fullName}`
    document.getElementById("status").textContent = getStatusName(report.status_id);
    document.getElementById("title").textContent = report.title;
    document.getElementById("description").textContent = report.description;
    document.getElementById("category").textContent = getCategoryName(report.category_id);
    document.getElementById("img").src = report.image_url;
    document.getElementById("date").textContent = `Fecha de creación: ${report.creation_date}`;
    document.getElementById("coords").textContent = `Cooredenadas: Latitude ${report.latitude} Longitud ${report.longitude}`;
    
}