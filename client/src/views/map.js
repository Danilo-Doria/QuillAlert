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

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);

  const reports = await consultAllReports();

  // Mapeo necesario para mostrar texto en el tooltip
  const categoryMap = { 1: "Infraestructura", 2: "Alumbrado", 3: "Limpieza urbana", 4: "Movilidad", 5: "Servicios públicos", 6: "Seguridad" };

  reports.forEach(report => {
    // Filtrar: ID 1 = Pendiente, ID 2 = En proceso (ajusta según tus IDs en BD)
    if (report.status_id == 1 || report.status_id == 2) {
      
      const lat = parseFloat(report.latitude);
      const lng = parseFloat(report.longitude);

      // Validar que existan coordenadas
      if (isNaN(lat) || isNaN(lng)) return;

      L.marker([lat, lng])
        .addTo(map)
        .bindTooltip(`
            <strong>${report.title}</strong><br>
            ${categoryMap[report.category_id] || "Otros"}
        `, {
            direction: "top"
        });
    }
  });
}