export function login() {
  return `<div class="min-h-screen grid grid-cols-1 lg:grid-cols-2">

  <!-- Left branding panel -->
  <div class="hidden lg:flex flex-col justify-between bg-navy text-white p-10 relative overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 via-pink-500 via-40% to-teal-400"></div>
    <div class="flex items-center gap-2.5">
      <div class="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
      </div>
      <div class="leading-tight">
        <p class="font-bold text-sm tracking-wide">QUILLALERT</p>
        <p class="text-[10px] text-slate-400 tracking-wider">BARRANQUILLA</p>
      </div>
    </div>

    <div class="relative z-10">
      <h2 class="text-3xl font-extrabold leading-tight">Reporta. Sigue.<br>Transforma tu ciudad.</h2>
      <p class="text-slate-300 mt-3 text-sm max-w-sm">Únete a miles de barranquilleros que ya están mejorando su ciudad, un reporte a la vez.</p>
      <div class="flex gap-6 mt-8">
        <div><p class="text-2xl font-bold">320</p><p class="text-xs text-slate-400">Reportes</p></div>
        <div><p class="text-2xl font-bold">164</p><p class="text-xs text-slate-400">Solucionados</p></div>
        <div><p class="text-2xl font-bold">12k+</p><p class="text-xs text-slate-400">Usuarios</p></div>
      </div>
    </div>

    <p class="text-xs text-slate-500 relative z-10">© 2026 Quillalert. Todos los derechos reservados.</p>

  </div>

  <!-- Right form panel -->
  <div class="flex items-center justify-center p-6 sm:p-10">
    <div class="w-full max-w-sm">

      <div class="flex items-center gap-2.5 mb-8 lg:hidden">
        <div class="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
        </div>
        <div class="leading-tight">
          <p class="font-bold text-sm tracking-wide text-slate-800">QUILLALERT</p>
          <p class="text-[10px] text-slate-400 tracking-wider">BARRANQUILLA</p>
        </div>
      </div>

      <h1 class="text-2xl font-bold text-slate-800">Bienvenido de nuevo</h1>
      <p class="text-sm text-slate-500 mt-1.5">Inicia sesión para continuar reportando novedades en tu ciudad.</p>

      <div class="space-y-4 mt-7">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1.5">Correo electrónico</label>
          <div class="relative">
            <input type="email" placeholder="tucorreo@ejemplo.com" class="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1.5">Contraseña</label>
          <div class="relative">
            <input type="password" placeholder="••••••••" class="w-full pl-9 pr-9 py-2.5 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
        </div>
        <label class="flex items-center gap-2 text-sm text-slate-600">
          <input type="checkbox" class="rounded border-slate-300 text-blue-600 focus:ring-blue-500">
          Recordarme
        </label>

        <button class="w-full bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold py-2.5 rounded-lg shadow-sm">
          Iniciar sesión
        </button>

        <div class="flex items-center gap-3 my-1">
          <div class="h-px bg-slate-200 flex-1"></div>
          <span class="text-xs text-slate-400">o continúa con</span>
          <div class="h-px bg-slate-200 flex-1"></div>
        </div>

        <button class="w-full flex items-center justify-center gap-2 border border-slate-200 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition">
        Continuar con Google
        </button>
      </div>

      <p class="text-sm text-slate-500 text-center mt-7">
        ¿No tienes una cuenta? <a href="/register" class="navigation text-blue-600 font-semibold hover:underline">Regístrate</a>
      </p>
    </div>
  </div>
</div>`
}