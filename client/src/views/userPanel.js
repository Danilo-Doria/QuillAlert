/* revisar agregar componentes por rol */
import { renderSidebar } from "../components/sidebar";
import { getSession } from "../services/auth.service";
import { renderHeader

 } from "../components/header";
export function userPanel() {
  return `
    <div class="flex min-h-screen">

    ${renderSidebar()}

    <div class="flex-1 flex flex-col min-w-0">

      ${getSession().isAdmin ? `` : `<header class="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 gap-3 shrink-0">
        <button onclick="toggleSidebar()" class="lg:hidden shrink-0 text-slate-500 hover:text-slate-700">
        </button>
        <div class="relative w-full max-w-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="search" aria-hidden="true" class="lucide lucide-search w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>

          <input type="text" placeholder="Buscar reportes, categorías, barrios..." class="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-100 border border-transparent text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition">
        </div>
        <div class="flex items-center gap-3 sm:gap-5 pl-2 sm:pl-6 shrink-0">
          <button class="flex items-center gap-2">
            <img src="https://i.pravatar.cc/64?img=12" class="w-8 h-8 rounded-full object-cover" alt="Juan Pérez">
            <span class="hidden sm:inline text-sm font-medium text-slate-700">Juan Pérez</span>
          </button>
        </div>
      </header>`}

      <main class="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

        <section class="bg-white rounded-2xl shadow-card border border-slate-100 p-5 sm:p-6 flex items-center justify-between overflow-hidden gap-4">
          <div>
            <h1 class="text-2xl font-bold text-slate-800 flex items-center gap-2">¡Hola, Juan! <span>👋</span></h1>
            <p class="text-slate-500 mt-1 text-sm">Juntos podemos hacer de Barranquilla una ciudad mejor.</p>
            <button class="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-4 h-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
              Crear nuevo reporte
            </button>
          </div>

          <div class="hidden md:flex items-end gap-1 shrink-0 opacity-90">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-16 h-16 text-teal-300"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-20 h-20 text-blue-300"><path d="M10 18v-7"></path><path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-14 h-14 text-pink-300"><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 6h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 6h.01"></path><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect x="4" y="2" width="16" height="20" rx="2"></rect></svg>
          </div>
        </section>

        <section>
          <div class="flex items-center justify-between mb-3">
            <h2 class="text-lg font-bold text-slate-800">Reportes recientes</h2>
            <a href="#" class="navigation text-sm font-medium text-blue-600 hover:underline">Ver todos</a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <!-- Card 1 -->
            <a href="detalle-reporte.html" class="bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden hover:shadow-md transition group">
              <div class="relative h-32 bg-slate-200">
                <img src="https://images.unsplash.com/photo-1615403916271-1af1e7f2ecc9?w=400&amp;h=250&amp;fit=crop" class="w-full h-full object-cover" alt="Hueco en la vía">
                <span class="absolute top-2 right-2 bg-amber-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">En revisión</span>
              </div>
              <div class="p-3.5">
                <p class="font-semibold text-slate-800 text-sm">Hueco grande en la vía</p>
                <p class="flex items-center gap-1 text-xs text-slate-500 mt-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-3.5 h-3.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Barrio El Prado</p>

                <div class="flex items-center justify-between mt-2 text-xs text-slate-400">
                  <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-3.5 h-3.5"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg> 12 may. 2026</span>
                </div>
              </div>
            </a>

            <!-- Card 2 -->
            <a href="detalle-reporte.html" class="bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden hover:shadow-md transition group">
              <div class="relative h-32 bg-slate-800">
                <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&amp;h=250&amp;fit=crop" class="w-full h-full object-cover opacity-90" alt="Poste sin luz">
                <span class="absolute top-2 right-2 bg-green-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">Solucionado</span>
              </div>
              <div class="p-3.5">
                <p class="font-semibold text-slate-800 text-sm">Poste sin luz</p>
                <p class="flex items-center gap-1 text-xs text-slate-500 mt-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-3.5 h-3.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Barrio Riomar</p>
                <div class="flex items-center justify-between mt-2 text-xs text-slate-400">
                  <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-3.5 h-3.5"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg> 10 may. 2026</span>
                </div>
              </div>
            </a>

          </div>
        </section>

      </main>
    </div>
</div>`
}