export function login() {
  return `<div class="min-h-screen grid grid-cols-1 lg:grid-cols-2">

  <!-- Left branding panel -->
  <div class="hidden lg:flex flex-col justify-between bg-navy text-white p-10 relative overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 via-pink-500 via-40% to-teal-400"></div>
    <div class="flex items-center gap-2.5">
       <img src="/quillalert.svg" alt="Logo" class="w-12 h-12 object-contain"/>
      <div class="leading-tight">
        <p class="font-bold text-sm tracking-wide">QUILLALERT</p>
        <p class="text-[10px] text-slate-400 tracking-wider">BARRANQUILLA</p>
      </div>
    </div>

    <div class="relative z-10">
      <h2 class="text-3xl font-extrabold leading-tight">Reporta. Sigue.<br>Transforma tu ciudad.</h2>
      <p class="text-slate-300 mt-3 text-sm max-w-sm">Únete a miles de barranquilleros que ya están mejorando su ciudad, un reporte a la vez.</p>
    </div>

    <p class="text-xs text-slate-500 relative z-10">© 2026 Quillalert. Todos los derechos reservados.</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="absolute -right-10 -bottom-10 w-64 h-64 text-blue-500/10"><path d="M10 18v-7"></path><path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>
  </div>

  <!-- Right form panel -->
  <div class="flex items-center justify-center p-6 sm:p-10">
    <div class="w-full max-w-sm">

      <div class="flex items-center gap-2.5 mb-8 lg:hidden">
        <div class="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-5 h-5 text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
        </div>
        <div class="leading-tight">
          <p class="font-bold text-sm tracking-wide text-slate-800">QUILLALERT</p>
          <p class="text-[10px] text-slate-400 tracking-wider">BARRANQUILLA</p>
        </div>
      </div>

      <h1 class="text-2xl font-bold text-slate-800">Bienvenido de nuevo</h1>
      <p class="text-sm text-slate-500 mt-1.5">Inicia sesión para continuar reportando novedades en tu ciudad.</p>

      <form id="login-form" class="space-y-4 mt-7">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1.5">Correo electrónico</label>
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>

            <input id="user-email" type="email" required placeholder="tucorreo@ejemplo.com" class="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1.5">Contraseña</label>
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>

            <input id="user-password" type="password" required placeholder="••••••••" class="w-full pl-9 pr-9 py-2.5 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500">

            <svg id="toggle-password" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </div>
        </div>

        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold py-2.5 rounded-lg shadow-sm cursor-pointer">
          Iniciar sesión
        </button>

        <div class="loading text-center"></div>
      </form>

      <p class="text-sm text-slate-500 text-center mt-7">
        ¿No tienes una cuenta? <a href="/register" class="navigation text-blue-600 font-semibold hover:underline">Regístrate</a>
      </p>
    </div>
  </div>
</div>`
}