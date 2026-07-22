import { getSession } from "../services/auth.service";
import { consultAllReports } from "../services/report.service";
import { counterCategories, counterStatuses } from "../utils/counters";

export async function dashboardData() {
    const currentUser = getSession();

    if((window.location.pathname === "/panel" && currentUser?.role === "ciudadano")) {
        return
    }
    
    const totalReports = document.getElementById("total-reports");
    const reportsUnderReview = document.getElementById("rev-reports");
    const solvedReports = document.getElementById("solved-reports");
    const pendingReports = document.getElementById("pending-reports");
    
    const reports = await consultAllReports();

    //{ 1: "Infraestructura", 2: "Alumbrado", 3: "Limpieza urbana", 4: "Movilidad", 5:
    //{ 1: "Pendiente", 2: "En revisión", 3: "Rechazado", 4: "Completado" };

    // total reports counter
    const total = reports.reduce((acc, report) => {
        acc++
        return acc
    }, 0);;

    // status counters
    const underReview = counterStatuses(reports, 2);

    const solved = counterStatuses(reports, 4);

    const pending = counterStatuses(reports, 1);

    // category counters
    const infrastructure = counterCategories(reports, 1);

    const lightning = counterCategories(reports, 2);

    const cleaning = counterCategories(reports, 3);

    const mobility = counterCategories(reports, 4);

    const publicServices = counterCategories(reports, 5);

    const security = counterCategories(reports, 6);

    if (window.location.pathname === "/") {
        totalReports.textContent = total;
        solvedReports.textContent = solved;
        
        document.getElementById("count-infraestructura").textContent = `${infrastructure} Reportes`;
        document.getElementById("count-limpieza").textContent = `${cleaning} Reportes`;
        document.getElementById("count-alumbrado").textContent = `${lightning} Reportes`;
        document.getElementById("count-movilidad").textContent = `${mobility} Reportes`;
        document.getElementById("count-servicios").textContent = `${publicServices} Reportes`;
        document.getElementById("count-seguridad").textContent = `${security} Reportes`;
        
        return
    }

    totalReports.textContent = total;
    reportsUnderReview.textContent = underReview;
    solvedReports.textContent = solved;
    pendingReports.textContent = pending;

    document.getElementById("count-infraestructura").textContent = infrastructure;
    document.getElementById("count-limpieza").textContent = cleaning;
    document.getElementById("count-alumbrado").textContent = lightning;
    document.getElementById("count-movilidad").textContent = mobility;
    document.getElementById("count-servicios").textContent = publicServices;
    document.getElementById("count-seguridad").textContent = security;

    const categorias = [
        { id: "circle-infraestructura", valor: infrastructure },
        { id: "circle-limpieza", valor: cleaning },
        { id: "circle-alumbrado", valor: lightning },
        { id: "circle-movilidad", valor: mobility },
        { id: "circle-servicios", valor: publicServices },
        { id: "circle-seguridad", valor: security },
    ];

    let acumulado = 0;

    for (let cat of categorias) {
        const porcentaje = total > 0 ? (cat.valor / total) * 100 : 0;
        const circle = document.getElementById(cat.id);

        circle.setAttribute("stroke-dasharray", `${porcentaje} ${100 - porcentaje}`);
        circle.setAttribute("stroke-dashoffset", -acumulado);

        acumulado += porcentaje;
    }
    
}