export function home() {
  return `
  <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <a href="landing.html" class="flex items-center gap-2.5 shrink-0">
        <div class="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="shield-check" aria-hidden="true" class="lucide lucide-shield-check w-5 h-5 text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
        </div>
        <div class="leading-tight">
          <p class="font-bold text-sm tracking-wide text-slate-800">QUILLALERT</p>
          <p class="text-[10px] text-slate-400 tracking-wider">BARRANQUILLA</p>
        </div>
      </a>

      <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#como-funciona" class="hover:text-blue-600 transition">Cómo funciona</a>
        <a href="#categorias" class="hover:text-blue-600 transition">Categorías</a>
        <a href="#comunidad" class="hover:text-blue-600 transition">Comunidad</a>
      </div>

      <div class="hidden md:flex items-center gap-3 shrink-0">
        <a href="/login" class="navigation text-sm font-semibold text-slate-600 hover:text-slate-800 px-4 py-2 transition">Iniciar sesión</a>
        <a href="/register" class="navigation inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm">
          Crear cuenta gratis
        </a>
      </div>

      <button class="menu-btn md:hidden text-slate-600 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
      </button>
    </div>

    <!-- Mobile nav panel -->
    <div id="mobile-nav" class="hidden md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-1">
      <a href="#como-funciona" class="block px-2 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">Cómo funciona</a>
      <a href="#categorias" class="block px-2 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">Categorías</a>
      <a href="#comunidad" class="block px-2 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">Comunidad</a>
      <div class="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
        <a href="/login" class="navigation text-center text-sm font-semibold text-slate-600 border border-slate-200 rounded-lg py-2.5">Iniciar sesión</a>
        <a href="/register" class="navigation text-center bg-blue-600 text-white text-sm font-semibold rounded-lg py-2.5">Crear cuenta gratis</a>
      </div>
    </div>
  </nav>

  <header class="relative overflow-hidden">
    <div class="blob absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none"></div>
    <div class="blob absolute -bottom-32 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <span class="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full">
          Hecho por y para la gente de la Arenosa
        </span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mt-4">
          Tu reporte es la voz que <span class="bg-gradient-to-r from-blue-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">transforma</span> a Barranquilla
        </h1>
        <p class="text-slate-500 text-base sm:text-lg mt-4 max-w-lg">
          Huecos, luminarias, basuras, semáforos dañados... Repórtalos en segundos, hazles seguimiento en tiempo real y ayuda a que la administración actúe más rápido.
        </p>

        <div class="flex flex-col sm:flex-row gap-3 mt-7">
          <a href="/register" class="navigation inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="plus-circle" aria-hidden="true" class="lucide lucide-plus-circle w-4 h-4"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
            Reportar un problema
          </a>
        </div>

        <div class="flex flex-wrap items-center gap-x-8 gap-y-3 mt-9">
          <div>
            <p class="text-2xl font-extrabold text-slate-800">320+</p>
            <p class="text-xs text-slate-500">Reportes creados</p>
          </div>
          <div>
            <p class="text-2xl font-extrabold text-slate-800">164</p>
            <p class="text-xs text-slate-500">Problemas resueltos</p>
          </div>
          <div>
            <p class="text-2xl font-extrabold text-slate-800">12k+</p>
            <p class="text-xs text-slate-500">Vecinos activos</p>
          </div>
        </div>
      </div>

      <!-- Illustration card -->
      <div class="relative">
        <div class="bg-white rounded-3xl shadow-xl border border-slate-100 p-5 sm:p-6 max-w-md mx-auto">
          <div class="h-1.5 -mx-5 sm:-mx-6 -mt-5 sm:-mt-6 mb-5 rounded-t-3xl bg-gradient-to-r from-yellow-400 via-pink-500 to-teal-400"></div>
          <div class="flex items-center justify-between mb-4">
            <p class="text-sm font-bold text-slate-800">Reportes cerca de ti</p>
            <span class="text-xs text-blue-600 font-semibold">Ver todos</span>
          </div>
          <div class="space-y-3">
            <div class="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
              <img src="https://images.unsplash.com/photo-1615403916271-1af1e7f2ecc9?w=100&h=100&fit=crop" class="w-12 h-12 rounded-lg object-cover shrink-0" alt="Hueco">
              <div class="min-w-0">
                <p class="text-sm font-semibold text-slate-800 truncate">Hueco grande en la vía</p>
                <p class="text-xs text-slate-500">Barrio El Prado</p>
              </div>
              <span class="ml-auto shrink-0 bg-amber-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">En revisión</span>
            </div>
            <div class="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
              <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=100&h=100&fit=crop" class="w-12 h-12 rounded-lg object-cover shrink-0" alt="Poste">
              <div class="min-w-0">
                <p class="text-sm font-semibold text-slate-800 truncate">Poste sin luz</p>
                <p class="text-xs text-slate-500">Barrio Riomar</p>
              </div>
              <span class="ml-auto shrink-0 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">Solucionado</span>
            </div>
            <div class="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
              <img src="https://images.unsplash.com/photo-1573883430696-cb0854d0b7c8?w=100&h=100&fit=crop" class="w-12 h-12 rounded-lg object-cover shrink-0" alt="Semáforo">
              <div class="min-w-0">
                <p class="text-sm font-semibold text-slate-800 truncate">Semáforo dañado</p>
                <p class="text-xs text-slate-500">Barrio Centro</p>
              </div>
              <span class="ml-auto shrink-0 bg-blue-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">Pendiente</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section id="como-funciona" class="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <p class="text-sm font-semibold text-blue-600">Cómo funciona</p>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">De un problema en tu cuadra a una ciudad mejor</h2>
      <p class="text-slate-500 mt-3 text-sm sm:text-base">Cuatro pasos simples para que tu reporte llegue a quien puede solucionarlo.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="relative bg-white rounded-2xl shadow-card border border-slate-100 p-6">
        <span class="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shadow-sm">1</span>
        <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="camera" aria-hidden="true" class="lucide lucide-camera w-6 h-6 text-blue-600"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>

        </div>
        <p class="font-bold text-slate-800">Reporta</p>
        <p class="text-sm text-slate-500 mt-1.5 leading-relaxed">Toma una foto, describe el problema y marca la ubicación exacta en el mapa.</p>
      </div>
      <div class="relative bg-white rounded-2xl shadow-card border border-slate-100 p-6">
        <span class="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shadow-sm">2</span>
        <div class="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
          
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="search-check" aria-hidden="true" class="lucide lucide-search-check w-6 h-6 text-amber-500"><path d="m8 11 2 2 4-4"></path><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>

        </div>
        <p class="font-bold text-slate-800">Se revisa</p>
        <p class="text-sm text-slate-500 mt-1.5 leading-relaxed">La administración recibe tu reporte y lo clasifica por categoría y prioridad.</p>
      </div>
      <div class="relative bg-white rounded-2xl shadow-card border border-slate-100 p-6">
        <span class="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shadow-sm">3</span>
        <div class="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
         
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="bell-ring" aria-hidden="true" class="lucide lucide-bell-ring w-6 h-6 text-purple-500"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path></svg>

        </div>
        <p class="font-bold text-slate-800">Haces seguimiento</p>
        <p class="text-sm text-slate-500 mt-1.5 leading-relaxed">Recibes notificaciones y ves el historial completo de tu reporte en tiempo real.</p>
      </div>
      <div class="relative bg-white rounded-2xl shadow-card border border-slate-100 p-6">
        <span class="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shadow-sm">4</span>
        <div class="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
          
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check-circle-2" aria-hidden="true" class="lucide lucide-check-circle-2 w-6 h-6 text-green-500"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>

        </div>
        <p class="font-bold text-slate-800">Se soluciona</p>
        <p class="text-sm text-slate-500 mt-1.5 leading-relaxed">El problema se resuelve y tu barrio queda un poco mejor gracias a ti.</p>
      </div>
    </div>
  </section>

  <section id="categorias" class="bg-white border-y border-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <p class="text-sm font-semibold text-blue-600">Qué puedes reportar</p>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Todo lo que afecta tu día a día en la ciudad</h2>
      </div>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div class="text-center border border-slate-100 rounded-2xl p-4 hover:shadow-card hover:border-blue-200 transition">
          <div class="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="construction" aria-hidden="true" class="lucide lucide-construction w-5 h-5 text-blue-600"><rect x="2" y="6" width="20" height="8" rx="1"></rect><path d="M17 14v7"></path><path d="M7 14v7"></path><path d="M17 3v3"></path><path d="M7 3v3"></path><path d="M10 14 2.3 6.3"></path><path d="m14 6 7.7 7.7"></path><path d="m8 6 8 8"></path></svg>
          </div>
          <p class="text-xs sm:text-sm font-semibold text-slate-700">Infraestructura</p>
          <p class="text-[11px] text-slate-400 mt-1">120 reportes</p>
        </div>
        <div class="text-center border border-slate-100 rounded-2xl p-4 hover:shadow-card hover:border-blue-200 transition">
          <div class="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="lightbulb" aria-hidden="true" class="lucide lucide-lightbulb w-5 h-5 text-amber-500"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
          </div>
          <p class="text-xs sm:text-sm font-semibold text-slate-700">Alumbrado</p>
          <p class="text-[11px] text-slate-400 mt-1">50 reportes</p>
        </div>
        <div class="text-center border border-slate-100 rounded-2xl p-4 hover:shadow-card hover:border-blue-200 transition">
          <div class="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="trash-2" aria-hidden="true" class="lucide lucide-trash-2 w-5 h-5 text-green-500"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </div>
          <p class="text-xs sm:text-sm font-semibold text-slate-700">Limpieza urbana</p>
          <p class="text-[11px] text-slate-400 mt-1">80 reportes</p>
        </div>
        <div class="text-center border border-slate-100 rounded-2xl p-4 hover:shadow-card hover:border-blue-200 transition">
          <div class="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="traffic-cone" aria-hidden="true" class="lucide lucide-traffic-cone w-5 h-5 text-purple-500"><path d="M16.05 10.966a5 2.5 0 0 1-8.1 0"></path><path d="m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04"></path><path d="M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z"></path><path d="M9.194 6.57a5 2.5 0 0 0 5.61 0"></path></svg>
          </div>
          <p class="text-xs sm:text-sm font-semibold text-slate-700">Movilidad</p>
          <p class="text-[11px] text-slate-400 mt-1">40 reportes</p>
        </div>
        <div class="text-center border border-slate-100 rounded-2xl p-4 hover:shadow-card hover:border-blue-200 transition">
          <div class="w-11 h-11 rounded-xl bg-pink-50 flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="droplets" aria-hidden="true" class="lucide lucide-droplets w-5 h-5 text-pink-500"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
          </div>
          <p class="text-xs sm:text-sm font-semibold text-slate-700">Servicios públicos</p>
          <p class="text-[11px] text-slate-400 mt-1">20 reportes</p>
        </div>
        <div class="text-center border border-slate-100 rounded-2xl p-4 hover:shadow-card hover:border-blue-200 transition">
          <div class="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="shield-alert" aria-hidden="true" class="lucide lucide-shield-alert w-5 h-5 text-red-500"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
          </div>
          <p class="text-xs sm:text-sm font-semibold text-slate-700">Seguridad</p>
          <p class="text-[11px] text-slate-400 mt-1">10 reportes</p>
        </div>
      </div>

      </div>
    </div>
  </section>

  <section class="bg-navy relative overflow-hidden">
    <div class="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-teal-400"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
      <div class="text-center max-w-xl mx-auto mb-10">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white">El impacto de reportar juntos</h2>
        <p class="text-slate-300 mt-2 text-sm sm:text-base">Cada reporte cuenta. Esto es lo que hemos logrado hasta ahora.</p>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div>
          <p class="text-3xl sm:text-4xl font-extrabold text-white">320+</p>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Reportes totales</p>
        </div>
        <div>
          <p class="text-3xl sm:text-4xl font-extrabold text-teal-300">164</p>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Problemas resueltos</p>
        </div>
        <div>
          <p class="text-3xl sm:text-4xl font-extrabold text-pink-300">20+</p>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Barrios activos</p>
        </div>
        <div>
          <p class="text-3xl sm:text-4xl font-extrabold text-amber-300">12k+</p>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Vecinos registrados</p>
        </div>
      </div>
    </div>
  </section>

  <section id="comunidad" class="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <p class="text-sm font-semibold text-blue-600">Comunidad</p>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Vecinos que ya están cambiando su barrio</h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white rounded-2xl shadow-card border border-slate-100 p-6">
        <div class="flex gap-0.5 text-amber-400 mb-3">
  
        </div>
        <p class="text-sm text-slate-600 leading-relaxed">"Reporté un hueco que llevaba meses ahí y en dos semanas ya lo habían arreglado. Se siente bien saber que uno puede aportar."</p>
        <div class="flex items-center gap-3 mt-5">
          <img src="https://i.pravatar.cc/64?img=12" class="w-10 h-10 rounded-full object-cover" alt="Juan Pérez">
          <div>
            <p class="text-sm font-semibold text-slate-800">Juan Pérez</p>
            <p class="text-xs text-slate-400">Barrio El Prado</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-2xl shadow-card border border-slate-100 p-6">
        <div class="flex gap-0.5 text-amber-400 mb-3">
          
        </div>
        <p class="text-sm text-slate-600 leading-relaxed">"Me encanta poder ver el mapa y saber qué está pasando en otros barrios, no solo en el mío. Uno entiende mejor la ciudad."</p>
        <div class="flex items-center gap-3 mt-5">
          <img src="https://i.pravatar.cc/64?img=45" class="w-10 h-10 rounded-full object-cover" alt="María Torres">
          <div>
            <p class="text-sm font-semibold text-slate-800">María Torres</p>
            <p class="text-xs text-slate-400">Barrio Riomar</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-2xl shadow-card border border-slate-100 p-6">
        <div class="flex gap-0.5 text-amber-400 mb-3">
          
        </div>
        <p class="text-sm text-slate-600 leading-relaxed">"La app es súper fácil de usar, subí fotos del problema en un minuto y pude seguir todo el proceso sin llamar a nadie."</p>
        <div class="flex items-center gap-3 mt-5">
          <img src="https://i.pravatar.cc/64?img=33" class="w-10 h-10 rounded-full object-cover" alt="Carlos Mendoza">
          <div>
            <p class="text-sm font-semibold text-slate-800">Carlos Mendoza</p>
            <p class="text-xs text-slate-400">Ciudadela 20 de Julio</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 px-6 sm:px-12 py-12 sm:py-16 text-center">

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="party-popper" aria-hidden="true" class="lucide lucide-party-popper w-10 h-10 text-white/90 mx-auto mb-4"><path d="M5.8 11.3 2 22l10.7-3.79"></path><path d="M4 3h.01"></path><path d="M22 8h.01"></path><path d="M15 2h.01"></path><path d="M22 20h.01"></path><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path></svg>

      <h2 class="text-2xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto">Tu barrio te necesita. ¡Al que no le guste, que no venga!</h2>
      <p class="text-white/90 mt-3 max-w-xl mx-auto text-sm sm:text-base">Crea tu cuenta gratis y súmate a los miles de barranquilleros que ya están mejorando su ciudad, un reporte a la vez.</p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center mt-7">
        <a href="/register" class="navigation inline-flex items-center justify-center gap-2 bg-white text-slate-800 hover:bg-slate-100 transition text-sm font-semibold px-6 py-3.5 rounded-xl shadow-sm">
          Crear cuenta gratis
        </a>
        <a href="/login" class="navigation inline-flex items-center justify-center gap-2 border border-white/70 text-white hover:bg-white/10 transition text-sm font-semibold px-6 py-3.5 rounded-xl">
          Ya tengo cuenta
        </a>
      </div>
    </div>
  </section>

  <footer class="bg-navy text-slate-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <div class="flex items-center gap-2.5 mb-3">
          <div class="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="shield-check" aria-hidden="true" class="lucide lucide-shield-check w-5 h-5 text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
          </div>
          <div class="leading-tight">
            <p class="font-bold text-sm tracking-wide text-white">QUILLALERT</p>
            <p class="text-[10px] text-slate-400 tracking-wider">BARRANQUILLA</p>
          </div>
        </div>
        <p class="text-sm text-slate-400 leading-relaxed">La plataforma ciudadana para reportar y solucionar problemas urbanos en Barranquilla.</p>
      </div>
      <div>
        <p class="text-sm font-bold text-white mb-3">Producto</p>
        <ul class="space-y-2 text-sm text-slate-400">
          <li><a href="#como-funciona" class="hover:text-white transition">Cómo funciona</a></li>
          <li><a href="#categorias" class="hover:text-white transition">Categorías</a></li>
        </ul>
      </div>
      <div>
        <p class="text-sm font-bold text-white mb-3">Cuenta</p>
        <ul class="space-y-2 text-sm text-slate-400">
          <li><a href="/register" class="navigation hover:text-white transition">Crear cuenta</a></li>
          <li><a href="/login" class="navigation hover:text-white transition">Iniciar sesión</a></li>
        </ul>
      </div>
      <div>
        <p class="text-sm font-bold text-white mb-3">Síguenos</p>
        <div class="flex gap-3">
          <a href="#" class="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition"></a>
          <a href="#" class="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition"></a>
          <a href="#" class="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition"></a>
        </div>
      </div>
    </div>
    <div class="border-t border-white/10 py-5 px-4 sm:px-6">
      <p class="text-xs text-slate-500 text-center">© 2026 Quillalert · Hecho con 💙 en Barranquilla</p>
    </div>
  </footer>`
}