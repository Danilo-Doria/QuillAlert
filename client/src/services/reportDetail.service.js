import { consultAllReports } from "./report.service";

export async function getReportDetails() {    
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const report = await consultAllReports(id)

    document.getElementById("status").textContent = report[0].status;
    document.getElementById("title").textContent = report[0].title;
    document.getElementById("description").textContent = report[0].description;
    document.getElementById("category").textContent = report[0].category;
}