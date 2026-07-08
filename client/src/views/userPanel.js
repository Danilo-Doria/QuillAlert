export function userPanel() {
  return `
    <div class="flex min-h-screen">

    <!-- Overlay móvil -->
    <div id="sidebar-overlay" onclick="toggleSidebar()" class="fixed inset-0 bg-black/40 z-40 hidden lg:hidden"></div>

    <aside id="sidebar" class="w-64 bg-navy text-white flex flex-col shrink-0 fixed inset-y-0 left-0 z-50 -translate-x-full transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static">
      <div class="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-pink-500 via-40% to-teal-400"></div>
      <div class="flex items-center justify-between gap-2.5 px-6 py-6">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
          </div>
          <div class="leading-tight">
            <p class="font-bold text-sm tracking-wide">QUILLALERT</p>
            <p class="text-[10px] text-slate-400 tracking-wider">BARRANQUILLA</p>
          </div>
        </div>
        <button onclick="toggleSidebar()" class="lg:hidden text-slate-400 hover:text-white">
        </button>
      </div>

      <div class="px-6 -mt-2 mb-3">
        <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/10 text-slate-200 text-[11px] font-semibold px-2.5 py-1 rounded-full">
          Ciudadano
        </span>
      </div>

      <nav class="flex-1 px-3 mt-1 space-y-1">
        <a href="/panel" class="navigation flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium">
          Inicio
        </a>
        <a href="#" class="navigation flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white text-sm font-medium transition">
          Reportes
        </a>
        <a href="/map" class="navigation flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white text-sm font-medium transition">
          Mapa
        </a>
        <a href="#" class="navigation flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white text-sm font-medium transition">
          Mis reportes
        </a>
        <a href="/profile" class="navigation flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white text-sm font-medium transition">
          Perfil
        </a>
        <a href="/login" class="navigation flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white text-sm font-medium transition">
          Cerrar sesión
        </a>
      </nav>

      <div class="p-4">
        <div class="rounded-xl bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-4 text-center shadow-lg">
          <p class="text-xs font-bold text-white leading-snug">¡Al que no le guste, que no venga!<br><span class="font-normal opacity-90">Cuidemos juntos nuestra Arenosa</span></p>
        </div>
      </div>
    </aside>

    <div class="flex-1 flex flex-col min-w-0">

      <!-- Topbar -->
      <header class="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 gap-3 shrink-0">
        <button onclick="toggleSidebar()" class="lg:hidden shrink-0 text-slate-500 hover:text-slate-700">
        </button>
        <div class="relative w-full max-w-md">
          <input type="text" placeholder="Buscar reportes, categorías, barrios..." class="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-100 border border-transparent text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition">
        </div>
        <div class="flex items-center gap-3 sm:gap-5 pl-2 sm:pl-6 shrink-0">
          <button class="relative text-slate-500 hover:text-slate-700">
            <span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">3</span>
          </button>
          <button class="flex items-center gap-2">
            <img src="https://i.pravatar.cc/64?img=12" class="w-8 h-8 rounded-full object-cover" alt="Juan Pérez">
            <span class="hidden sm:inline text-sm font-medium text-slate-700">Juan Pérez</span>
          </button>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

        <section class="bg-white rounded-2xl shadow-card border border-slate-100 p-5 sm:p-6 flex items-center justify-between overflow-hidden gap-4">
          <div>
            <h1 class="text-2xl font-bold text-slate-800 flex items-center gap-2">¡Hola, Juan! <span>👋</span></h1>
            <p class="text-slate-500 mt-1 text-sm">Juntos podemos hacer de Barranquilla una ciudad mejor.</p>
            <button class="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm">
              Crear nuevo reporte
            </button>
          </div>
        </section>

        <section>
          <div class="flex items-center justify-between mb-3">
            <h2 class="text-lg font-bold text-slate-800">Reportes recientes</h2>
            <a href="#" class="navigation text-sm font-medium text-blue-600 hover:underline">Ver todos</a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <!-- Card 1 -->
            <a href="panel" class="navigation bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden hover:shadow-md transition group">
              <div class="relative h-32 bg-slate-200">
                <img src="https://images.unsplash.com/photo-1615403916271-1af1e7f2ecc9?w=400&h=250&fit=crop" class="w-full h-full object-cover" alt="Hueco en la vía">
                <span class="absolute top-2 right-2 bg-amber-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">En revisión</span>
              </div>
              <div class="p-3.5">
                <p class="font-semibold text-slate-800 text-sm">Hueco grande en la vía</p>
                <p class="flex items-center gap-1 text-xs text-slate-500 mt-1.5">
                  Barrio El Prado
                </p>
                <div class="flex items-center justify-between mt-2 text-xs text-slate-400">
                  <span class="flex items-center gap-1">
                  12 may. 2026
                </span>
                </div>
              </div>
            </a>

            <!-- Card 2 -->
            <a href="detalle-reporte.html" class="navigation bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden hover:shadow-md transition group">
              <div class="relative h-32 bg-slate-800">
                <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=250&fit=crop" class="w-full h-full object-cover opacity-90" alt="Poste sin luz">
                <span class="absolute top-2 right-2 bg-green-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">Solucionado</span>
              </div>
              <div class="p-3.5">
                <p class="font-semibold text-slate-800 text-sm">Poste sin luz</p>
                <p class="flex items-center gap-1 text-xs text-slate-500 mt-1.5">
                  Barrio Riomar
                </p>
                <div class="flex items-center justify-between mt-2 text-xs text-slate-400">
                  <span class="flex items-center gap-1">
                    10 may. 2026
                  </span>
                </div>
              </div>
            </a>

            <!-- Card 4 -->
            <a href="detalle-reporte.html" class="navigation bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden hover:shadow-md transition group">
              <div class="relative h-32 bg-sky-200">
                <img src="https://images.unsplash.com/photo-1573883430696-cb0854d0b7c8?w=400&h=250&fit=crop" class="w-full h-full object-cover" alt="Semáforo dañado">
                <span class="absolute top-2 right-2 bg-blue-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">Pendiente</span>
              </div>
              <div class="p-3.5">
                <p class="font-semibold text-slate-800 text-sm">Semáforo dañado</p>
                <p class="flex items-center gap-1 text-xs text-slate-500 mt-1.5">
                  Barrio Centro
                </p>
                <div class="flex items-center justify-between mt-2 text-xs text-slate-400">
                  <span class="flex items-center gap-1">
                    8 may. 2026
                  </span>
                </div>
              </div>
            </a>

          </div>
        </section>

      </main>
    </div>
</div>`
}