import { renderSidebar } from "../components/sidebar";
import { renderHeader } from "../components/header";
import { consultAllReports } from "../services/report.service";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function renderMap() {
  return `
    <div class="flex min-h-screen">

    ${renderSidebar()}

    <!-- MAIN -->
    <div class="flex-1 flex flex-col min-w-0">

      ${renderHeader()}

      <!-- Map area -->
      <main class="flex-1 relative map-bg overflow-hidden w-full h-full z-0">

        <div id="map" class="w-full h-full">
          
        </div>

      </main>
    </div>
  </div>`
}

export async function mapImg() {

  const map = L.map("map").setView([10.9639, -74.7966], 13);

  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution: "&copy; OpenStreetMap"
    }
  ).addTo(map);

  const reports = await consultAllReports();

  reports.forEach(report => {

    if (report.status == "Pendiente" || report.status == "En revisión") {
      const gps = report.location?.gps;

      if (!gps) return;

      L.marker([gps.latitud, gps.longitud])
      .addTo(map)
      .bindTooltip(`
          <strong>${report.title}</strong><br>
          ${report.category}
      `, {
          direction: "top"
      });
          
    }
    
  });

}
