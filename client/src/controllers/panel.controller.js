import { consultAllReports } from "../services/report.service";

export async function dashboardData() {
    const totalReports = document.getElementById("total-reports");
    const revReports = document.getElementById("rev-reports");
    const solvedReports = document.getElementById("solved-reports");
    const pendingReports = document.getElementById("pending-reports");
    
    const reports = await consultAllReports();

    console.log(reports)
    //{ 1: "Pendiente", 2: "En revisión", 3: "Rechazado", 4: "Completado" };

    let total = 0;
    let rev = 0;
    let solved = 0;
    let pending = 0;
    
    for (let report of reports) {

        total++;

        if (report.status_id === 2) {
            rev++
        } else if (report.status_id === 4) {
            solved++
        } else if (report.status_id === 1) {
            pending++
        }
    }

    totalReports.textContent = total || 0;
    revReports.textContent = rev || 0;
    solvedReports.textContent = solved || 0;
    pendingReports.textContent = pending || 0;

}