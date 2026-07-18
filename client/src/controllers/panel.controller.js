import { getSession } from "../services/auth.service";
import { consultAllReports } from "../services/report.service";

export async function dashboardData() {
    const currentUser = getSession();

    if((window.location.pathname === "/panel" && currentUser?.role === "ciudadano")) {
        return
    }
    
    const totalReports = document.getElementById("total-reports");
    const revReports = document.getElementById("rev-reports");
    const solvedReports = document.getElementById("solved-reports");
    const pendingReports = document.getElementById("pending-reports");
    
    const reports = await consultAllReports();

    //{ 1: "Infraestructura", 2: "Alumbrado", 3: "Limpieza urbana", 4: "Movilidad", 5:
    //{ 1: "Pendiente", 2: "En revisión", 3: "Rechazado", 4: "Completado" };

    // status counter
    let total = 0;
    let rev = 0;
    let solved = 0;
    let pending = 0;

    // categorie counter
    let infraestructura = 0;
    let alumbrado = 0;
    let limpieza = 0;
    let movilidad = 0;
    let serviciosPublicos = 0;
    let seguridad = 0;

    for (let report of reports) {

        total++;

        if (report.status_id === 2) {
            rev++
        } else if (report.status_id === 4) {
            solved++
        } else if (report.status_id === 1) {
            pending++
        }

        // categorie count
        if (report.category_id === 1) {
            infraestructura++
        } else if (report.category_id === 2) {
            alumbrado++
        } else if (report.category_id === 3) {
            limpieza++
        } else if (report.category_id === 4) {
            movilidad++
        } else if (report.category_id === 5) {
            serviciosPublicos++
        } else if (report.category_id === 6) {
            seguridad++
        }
    }

    if (window.location.pathname === "/") {
        totalReports.textContent = total;
        solvedReports.textContent = solved;
        
        document.getElementById("count-infraestructura").textContent = `${infraestructura} Reportes`;
        document.getElementById("count-limpieza").textContent = `${limpieza} Reportes`;
        document.getElementById("count-alumbrado").textContent = `${alumbrado} Reportes`;
        document.getElementById("count-movilidad").textContent = `${movilidad} Reportes`;
        document.getElementById("count-servicios").textContent = `${serviciosPublicos} Reportes`;
        document.getElementById("count-seguridad").textContent = `${seguridad} Reportes`;
        
        return
    }

    totalReports.textContent = total;
    revReports.textContent = rev;
    solvedReports.textContent = solved;
    pendingReports.textContent = pending;

    document.getElementById("count-infraestructura").textContent = infraestructura;
    document.getElementById("count-limpieza").textContent = limpieza;
    document.getElementById("count-alumbrado").textContent = alumbrado;
    document.getElementById("count-movilidad").textContent = movilidad;
    document.getElementById("count-servicios").textContent = serviciosPublicos;
    document.getElementById("count-seguridad").textContent = seguridad;

    const categorias = [
        { id: "circle-infraestructura", valor: infraestructura },
        { id: "circle-limpieza", valor: limpieza },
        { id: "circle-alumbrado", valor: alumbrado },
        { id: "circle-movilidad", valor: movilidad },
        { id: "circle-servicios", valor: serviciosPublicos },
        { id: "circle-seguridad", valor: seguridad },
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