export function adminPanel() {
  return `
  <div class="flex min-h-screen">

    <!-- Overlay móvil -->
    <div id="sidebar-overlay" onclick="toggleSidebar()" class="fixed inset-0 bg-black/40 z-40 hidden lg:hidden"></div>

      <!-- SIDEBAR -->
      <aside id="sidebar" class="w-64 bg-navy text-white flex flex-col shrink-0 fixed inset-y-0 left-0 z-50 -translate-x-full transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static">
        <div class="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-pink-500 via-40% to-teal-400"></div>
        <div class="px-6 py-6">
          <div class="flex items-center justify-between gap-2.5">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-5 h-5 text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              </div>
              <div class="leading-tight">
                <p class="font-bold text-sm tracking-wide">QUILLALERT</p>
                <p class="text-[10px] text-slate-400 tracking-wider">BARRANQUILLA</p>
              </div>
            </div>
            <button class="menu-btn lg:hidden text-slate-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-7 h-7"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            </button>
          </div>
          <span class="inline-flex items-center gap-1.5 bg-blue-600/20 border border-blue-500/30 text-blue-200 text-[11px] font-semibold px-2.5 py-1 rounded-full mt-4">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-3 h-3"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            Administrador

          </span>
        </div>
        <nav class="flex-1 px-3 space-y-1">
        <a href="admin-panel.html" class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-[18px] h-[18px]"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg> Panel de control
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white text-sm font-medium transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-[18px] h-[18px]"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Reportes
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white text-sm font-medium transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-[18px] h-[18px]"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle></svg> Categorías
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white text-sm font-medium transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-[18px] h-[18px]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> Usuarios
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white text-sm font-medium transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-[18px] h-[18px]"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg> Estadísticas
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white text-sm font-medium transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-[18px] h-[18px]"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg> Configuración
        </a>
        <a href="/login" class="navigation flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white text-sm font-medium transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-[18px] h-[18px]"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg> Cerrar sesión
        </a>
      </nav>
      </aside>

      <!-- MAIN -->
      <div class="flex-1 flex flex-col min-w-0">

        <header class="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 gap-3 shrink-0">
          <div class="flex items-center gap-3 min-w-0">
            <button class="menu-btn lg:hidden shrink-0 text-slate-500 hover:text-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            <h1 class="text-base sm:text-lg font-bold text-slate-800 truncate">Panel de control</h1>
          </div>
          <div class="flex items-center gap-3 sm:gap-5 shrink-0">
            <div class="flex items-center gap-2">
              <img src="https://i.pravatar.cc/64?img=33" class="w-8 h-8 rounded-full object-cover" alt="Admin">
              <span class="hidden sm:inline text-sm font-medium text-slate-700">Admin</span>
            </div>
          </div>
        </header>

        <main class="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          <!-- Stats -->
          <section class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white rounded-xl shadow-card border border-slate-100 p-4 flex items-center gap-3">
              <div class="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-5 h-5 text-blue-600"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
              <div><p class="text-xl font-bold text-blue-600">320</p><p class="text-xs text-slate-500">Total reportes</p></div>
            </div>
            <div class="bg-white rounded-xl shadow-card border border-slate-100 p-4 flex items-center gap-3">
              <div class="w-11 h-11 rounded-lg bg-amber-50 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-5 h-5 text-amber-500"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg></div>
              <div><p class="text-xl font-bold text-amber-500">128</p><p class="text-xs text-slate-500">En revisión</p></div>
            </div>
            <div class="bg-white rounded-xl shadow-card border border-slate-100 p-4 flex items-center gap-3">
              <div class="w-11 h-11 rounded-lg bg-green-50 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-5 h-5 text-green-500"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div>
              <div><p class="text-xl font-bold text-green-500">164</p><p class="text-xs text-slate-500">Solucionados</p></div>
            </div>
            <div class="bg-white rounded-xl shadow-card border border-slate-100 p-4 flex items-center gap-3">
              <div class="w-11 h-11 rounded-lg bg-purple-50 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-5 h-5 text-purple-500"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg></div>
              <div><p class="text-xl font-bold text-purple-500">28</p><p class="text-xs text-slate-500">Pendientes</p></div>
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
              <a href="#" class="text-sm font-medium text-blue-600 hover:underline">Ver todos</a>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="text-left text-slate-400 text-xs uppercase tracking-wide border-b border-slate-100">
                    <th class="py-2 pr-4 font-semibold">ID</th>
                    <th class="py-2 pr-4 font-semibold">Título</th>
                    <th class="py-2 pr-4 font-semibold">Barrio</th>
                    <th class="py-2 pr-4 font-semibold">Categoría</th>
                    <th class="py-2 pr-4 font-semibold">Estado</th>
                    <th class="py-2 pr-4 font-semibold">Fecha</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-50">
                  <tr>
                    <td class="py-3 pr-4 font-semibold text-blue-600">#320</td>
                    <td class="py-3 pr-4 text-slate-700">Hueco grande en la vía</td>
                    <td class="py-3 pr-4 text-slate-500">El Prado</td>
                    <td class="py-3 pr-4 text-slate-500">Infraestructura</td>
                    <td class="py-3 pr-4"><span class="bg-amber-50 text-amber-600 text-xs font-semibold px-2.5 py-1 rounded-full">En revisión</span></td>
                    <td class="py-3 pr-4 text-slate-500">12 may. 2026</td>
                  </tr>
                  <tr>
                    <td class="py-3 pr-4 font-semibold text-blue-600">#319</td>
                    <td class="py-3 pr-4 text-slate-700">Poste sin luz</td>
                    <td class="py-3 pr-4 text-slate-500">Riomar</td>
                    <td class="py-3 pr-4 text-slate-500">Alumbrado</td>
                    <td class="py-3 pr-4"><span class="bg-green-50 text-green-600 text-xs font-semibold px-2.5 py-1 rounded-full">Solucionado</span></td>
                    <td class="py-3 pr-4 text-slate-500">10 may. 2026</td>
                  </tr>
                  <tr>
                    <td class="py-3 pr-4 font-semibold text-blue-600">#318</td>
                    <td class="py-3 pr-4 text-slate-700">Basura acumulada</td>
                    <td class="py-3 pr-4 text-slate-500">Ciudadela 20 de Julio</td>
                    <td class="py-3 pr-4 text-slate-500">Limpieza urbana</td>
                    <td class="py-3 pr-4"><span class="bg-amber-50 text-amber-600 text-xs font-semibold px-2.5 py-1 rounded-full">En revisión</span></td>
                    <td class="py-3 pr-4 text-slate-500">9 may. 2026</td>
                  </tr>
                  <tr>
                    <td class="py-3 pr-4 font-semibold text-blue-600">#317</td>
                    <td class="py-3 pr-4 text-slate-700">Semáforo dañado</td>
                    <td class="py-3 pr-4 text-slate-500">Centro</td>
                    <td class="py-3 pr-4 text-slate-500">Movilidad</td>
                    <td class="py-3 pr-4"><span class="bg-blue-50 text-blue-600 text-xs font-semibold px-2.5 py-1 rounded-full">Pendiente</span></td>
                    <td class="py-3 pr-4 text-slate-500">8 may. 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </main>
      </div>
    </div>
    `
}

// Función para activar los clics desde JS
export function menuToggle() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const menuButtons = document.querySelectorAll('.menu-btn');

  if (sidebar && overlay) {
    menuButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
      });
    });
    
    overlay.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
    });
  }
}