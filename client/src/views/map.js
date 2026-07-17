import { renderSidebar } from "../components/sidebar";
import { renderHeader } from "../components/header";
import { consultAllReports } from "../services/report.service";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


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

  delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
  });
  
  const map = L.map("map").setView([10.9639, -74.7966], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);

  const reports = await consultAllReports();

  // Mapeo necesario para mostrar texto en el popup
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
        .bindPopup(`
          <div class="w-56 overflow-hidden rounded-lg">
            <img src="${report.image_url}" class="w-full h-28 object-cover" alt="${report.title}">
            <div class="p-3">
              <span class="inline-block text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full mb-1.5">
                ${categoryMap[report.category_id] || "Otros"}
              </span>
              <p class="text-sm font-bold text-slate-800 leading-snug mb-2">${report.title}</p>
              <a href="/report-detail?id=${report.id}" class="navigation inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700">
                Ver más
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </div>
          </div>
        `, {
          maxWidth: 224,
          minWidth: 224,
          className: "custom-popup"
        });
    }
  });
}