import { renderSidebar } from "../components/sidebar";
import { renderHeader } from "../components/header";
import { getSession } from "../services/auth.service"

export function panel() {

  const session = getSession()  
  const activeName = session?.name && session.name.trim() !== "" ? session.name : "Usuario";

  const name = `${activeName[0].toUpperCase()}${activeName.slice(1)}`;
  
  return `
  <div class="flex min-h-screen">

      ${renderSidebar()}

      <div class="flex-1 flex flex-col min-w-0">

        ${renderHeader()}

        ${session.role == 'alcaldia' ? `<main class="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          <!-- Stats -->
          <section class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white rounded-xl shadow-card border border-slate-100 p-4 flex items-center gap-3">
              <div class="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-5 h-5 text-blue-600"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
              <div>
                <p id="total-reports" class="text-xl font-bold text-blue-600"></p>
                <p class="text-xs text-slate-500">Total reportes</p>
              </div>
            </div>
            <div class="bg-white rounded-xl shadow-card border border-slate-100 p-4 flex items-center gap-3">
              <div class="w-11 h-11 rounded-lg bg-amber-50 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-5 h-5 text-amber-500"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg></div>
              <div>
                <p id="rev-reports" class="text-xl font-bold text-amber-500"></p>
                <p class="text-xs text-slate-500">En revisión</p>
              </div>
            </div>
            <div class="bg-white rounded-xl shadow-card border border-slate-100 p-4 flex items-center gap-3">
              <div class="w-11 h-11 rounded-lg bg-green-50 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-5 h-5 text-green-500"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div>
              <div>
                <p id="solved-reports"class="text-xl font-bold text-green-500"></p>
                <p class="text-xs text-slate-500">Solucionados</p>
              </div>
            </div>
            <div class="bg-white rounded-xl shadow-card border border-slate-100 p-4 flex items-center gap-3">
              <div class="w-11 h-11 rounded-lg bg-purple-50 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-5 h-5 text-purple-500"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg></div>
              <div>
                <p id="pending-reports" class="text-xl font-bold text-purple-500"></p>
                <p class="text-xs text-slate-500">Pendientes</p>
              </div>
            </div>
          </section>

          <!-- Charts -->
          <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <!-- Donut chart -->
            <div class="bg-white rounded-xl shadow-card border border-slate-100 p-5">
              <p class="text-sm font-bold text-slate-800 mb-4">Reportes por categoría</p>
              <div class="flex flex-col sm:flex-row items-center gap-6">
                <svg viewBox="0 0 42 42" class="w-36 h-36 shrink-0 -rotate-90">
                  <circle cx="21" cy="21" r="15.91549" fill="transparent" stroke="#e2e8f0" stroke-width="5"></circle>
                  <circle cx="21" cy="21" r="15.91549" fill="transparent" stroke="#2563EB" stroke-width="5"
                    stroke-dasharray="37.5 62.5" stroke-dashoffset="0"></circle>
                  <circle cx="21" cy="21" r="15.91549" fill="transparent" stroke="#22C55E" stroke-width="5"
                    stroke-dasharray="25 75" stroke-dashoffset="-37.5"></circle>
                  <circle cx="21" cy="21" r="15.91549" fill="transparent" stroke="#F59E0B" stroke-width="5"
                    stroke-dasharray="15.6 84.4" stroke-dashoffset="-62.5"></circle>
                  <circle cx="21" cy="21" r="15.91549" fill="transparent" stroke="#A855F7" stroke-width="5"
                    stroke-dasharray="12.5 87.5" stroke-dashoffset="-78.1"></circle>
                  <circle cx="21" cy="21" r="15.91549" fill="transparent" stroke="#EC4899" stroke-width="5"
                    stroke-dasharray="6.25 93.75" stroke-dashoffset="-90.6"></circle>
                  <circle cx="21" cy="21" r="15.91549" fill="transparent" stroke="#EF4444" stroke-width="5"
                    stroke-dasharray="3.1 96.9" stroke-dashoffset="-96.85"></circle>
                </svg>
                <div class="space-y-2 text-sm w-full">
                  <div class="flex items-center justify-between"><span class="flex items-center gap-2 text-slate-600"><span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>Infraestructura</span><span class="font-semibold">120</span></div>
                  <div class="flex items-center justify-between"><span class="flex items-center gap-2 text-slate-600"><span class="w-2.5 h-2.5 rounded-full bg-green-500"></span>Limpieza urbana</span><span class="font-semibold">80</span></div>
                  <div class="flex items-center justify-between"><span class="flex items-center gap-2 text-slate-600"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>Alumbrado</span><span class="font-semibold">50</span></div>
                  <div class="flex items-center justify-between"><span class="flex items-center gap-2 text-slate-600"><span class="w-2.5 h-2.5 rounded-full bg-purple-500"></span>Movilidad</span><span class="font-semibold">40</span></div>
                  <div class="flex items-center justify-between"><span class="flex items-center gap-2 text-slate-600"><span class="w-2.5 h-2.5 rounded-full bg-pink-500"></span>Servicios públicos</span><span class="font-semibold">20</span></div>
                  <div class="flex items-center justify-between"><span class="flex items-center gap-2 text-slate-600"><span class="w-2.5 h-2.5 rounded-full bg-red-500"></span>Seguridad</span><span class="font-semibold">10</span></div>
                </div>
              </div>
            </div>

            <!-- Bar chart -->
            <div class="bg-white rounded-xl shadow-card border border-slate-100 p-5">
              <p class="text-sm font-bold text-slate-800 mb-5">Reportes por barrio (Top 5)</p>
              <div class="space-y-3.5">
                <div class="grid grid-cols-[92px_1fr_2rem] sm:grid-cols-[130px_1fr_2rem] items-center gap-2 text-sm">
                  <span class="text-slate-600 truncate">Ciudadela 20 de Julio</span>
                  <div class="h-2.5 rounded-full bg-slate-100"><div class="h-2.5 rounded-full bg-blue-600" style="width:96%"></div></div>
                  <span class="text-right font-semibold text-slate-700">58</span>
                </div>
                <div class="grid grid-cols-[92px_1fr_2rem] sm:grid-cols-[130px_1fr_2rem] items-center gap-2 text-sm">
                  <span class="text-slate-600 truncate">Suroriente</span>
                  <div class="h-2.5 rounded-full bg-slate-100"><div class="h-2.5 rounded-full bg-blue-600" style="width:80%"></div></div>
                  <span class="text-right font-semibold text-slate-700">48</span>
                </div>
                <div class="grid grid-cols-[92px_1fr_2rem] sm:grid-cols-[130px_1fr_2rem] items-center gap-2 text-sm">
                  <span class="text-slate-600 truncate">Riomar</span>
                  <div class="h-2.5 rounded-full bg-slate-100"><div class="h-2.5 rounded-full bg-blue-600" style="width:76%"></div></div>
                  <span class="text-right font-semibold text-slate-700">46</span>
                </div>
                <div class="grid grid-cols-[92px_1fr_2rem] sm:grid-cols-[130px_1fr_2rem] items-center gap-2 text-sm">
                  <span class="text-slate-600 truncate">El Prado</span>
                  <div class="h-2.5 rounded-full bg-slate-100"><div class="h-2.5 rounded-full bg-blue-600" style="width:63%"></div></div>
                  <span class="text-right font-semibold text-slate-700">38</span>
                </div>
                <div class="grid grid-cols-[92px_1fr_2rem] sm:grid-cols-[130px_1fr_2rem] items-center gap-2 text-sm">
                  <span class="text-slate-600 truncate">Norte Centro Histórico</span>
                  <div class="h-2.5 rounded-full bg-slate-100"><div class="h-2.5 rounded-full bg-blue-600" style="width:53%"></div></div>
                  <span class="text-right font-semibold text-slate-700">32</span>
                </div>
              </div>
              <div class="flex justify-between text-[11px] text-slate-400 mt-3 pl-[100px] sm:pl-[138px]">
                <span>0</span><span>10</span><span>20</span><span>30</span><span>40</span><span>50</span><span>60</span>
              </div>
            </div>
          </section>

          <!-- Table -->
          <section class="bg-white rounded-xl shadow-card border border-slate-100 p-5">
            <div class="flex items-center justify-between mb-4">
              <p class="text-sm font-bold text-slate-800">Reportes recientes</p>
              <a href="/all-reports" class="navigation text-sm font-medium text-blue-600 hover:underline">Ver todos</a>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="text-left text-slate-400 text-xs uppercase tracking-wide border-b border-slate-100">
                    <th class="py-2 pr-4 font-semibold">ID</th>
                    <th class="py-2 pr-4 font-semibold">Título</th>
                    <th class="py-2 pr-4 font-semibold">Usuario</th>
                    <th class="py-2 pr-4 font-semibold">Categoría</th>
                    <th class="py-2 pr-4 font-semibold">Estado</th>
                    <th class="py-2 pr-4 font-semibold">Fecha</th>
                  </tr>
                </thead>
                <tbody id ="table-container" class="divide-y divide-slate-50">
                  
                </tbody>
              </table>
            </div>
          </section>

        </main>
      </div>
    </div>` : `<main class="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

        <section class="bg-white rounded-2xl shadow-card border border-slate-100 p-5 sm:p-6 flex items-center justify-between overflow-hidden gap-4">
          <div>
            <h1 class="text-2xl font-bold text-slate-800 flex items-center gap-2">¡Hola, ${name}! <span>👋</span></h1>
            <p class="text-slate-500 mt-1 text-sm">Juntos podemos hacer de Barranquilla una ciudad mejor.</p>
            <button id="create-report-btn" class="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-4 h-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
              Crear nuevo reporte
            </button>
          </div>

          <div id="report-form" class="hidden fixed inset-0 z-50 items-center justify-center bg-slate-900/60 p-4"></div>  

          <div class="hidden md:flex items-end gap-1 shrink-0 opacity-90">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-16 h-16 text-teal-300"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-20 h-20 text-blue-300"><path d="M10 18v-7"></path><path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-14 h-14 text-pink-300"><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 6h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 6h.01"></path><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect x="4" y="2" width="16" height="20" rx="2"></rect></svg>
          </div>
        </section>

        <section>
          <div class="flex items-center justify-between mb-3">
            <h2 class="text-lg font-bold text-slate-800">Reportes recientes</h2>
            <a href="/all-reports" class="navigation text-sm font-medium text-blue-600 hover:underline">Ver todos</a>
          </div>

          <div id="reports-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-3">
         
          </div>

        </section>
      </main>
    </div>
</div>`}`
}