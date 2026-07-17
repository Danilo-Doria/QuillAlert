import { getStatusColor } from "../utils/statusToggle";
import { getSession } from "./auth.service";
import { getUserById } from "./users.service";

export async function renderReports(reports) {
    const currentUser = getSession();

    const reportsContainer = document.getElementById(currentUser?.role == "alcaldia" && window.location.pathname == "/panel" ? "table-container" : "reports-container");

    if (!reportsContainer) return;
    
    const categoryMap = { 1: "Infraestructura", 2: "Alumbrado", 3: "Limpieza urbana", 4: "Movilidad", 5: "Servicios públicos", 6: "Seguridad" };
    
    const statusMap = { 1: "Pendiente", 2: "En revisión", 3: "Rechazado", 4: "Completado" };

    const getCategoryName = (id) => categoryMap[id] || "Otros";
    const getStatusName = (id) => statusMap[id] || "Desconocido";
        
    let html = "";

    for (const report of reports) {

        const {name, last_name} = await getUserById(report.user_id);

        const fullName = `${name[0].toUpperCase()}${name.slice(1)} ${last_name[0].toUpperCase()}${last_name.slice(1)}`;
        
        const catName = getCategoryName(report.category_id);
        const statusName = getStatusName(report.status_id);

        
        html += `${currentUser?.role == "alcaldia" && window.location.pathname == "/panel" ? `
        <tr>
            <td class="py-3 pr-4 font-semibold text-blue-600">#${report.id}</td>
            <td class="py-3 pr-4 text-slate-700">${report.title}</td>
            <td class="py-3 pr-4 text-slate-700">${fullName}</td>
            <td class="py-3 pr-4 text-slate-500">${catName}</td>
            <td class="py-3 pr-4"><span class="${getStatusColor(statusName)} text-white text-xs font-semibold px-2.5 py-1 rounded-full">${statusName}</span></td>
            <td class="py-3 pr-4 text-slate-500">${report.creation_date}</td>
        </tr>` : 
        
        `<a href="/report-detail?id=${report.id}" class="card navigation reports bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden hover:shadow-md transition group cursor-pointer">
                <div class="relative h-32 bg-slate-200">
                    <img src="${report.image_url}" class="w-full h-full object-cover" alt="Reporte">
                    <span class="absolute top-2 right-2 ${getStatusColor(statusName)} text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">${statusName}</span>
                </div>
                <div class="p-3.5">
                    <p class="font-semibold text-slate-800 text-sm">${report.title}</p>
                    <p class="text-xs text-slate-500 mt-1">${catName}</p>
                    <p class="text-xs text-slate-500 mt-1">${fullName}</p>
                    <div class="flex items-center justify-between mt-2 text-xs text-slate-400">
                        <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-3.5 h-3.5"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>${report.creation_date || "Fecha no Disponible"}</span>

                    ${(window.location.pathname === "/all-reports" && currentUser?.role === "alcaldia") || (window.location.pathname === "/reports" && currentUser?.role === "ciudadano" && report.status_id == 1) ? 
                        `<div class="flex items-center gap-1.5">
                            <button class="edit-report-btn w-7 h-7 flex items-center justify-center bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-blue-600 rounded-full transition cursor-pointer" 
                            data-report='${JSON.stringify(report)}'">
                                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                            </button>

                            <button class="delete-report-btn w-7 h-7 flex items-center justify-center bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-red-600 rounded-full transition cursor-pointer"
                            data-id="${report.id}">
                                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                            </button>
                        </div>` 
                        : ''
                    }
                    
                    </div>
                </div>
            </a>`}`;
        }
        reportsContainer.innerHTML = html;
}