export function register() {
  return `
  <div class="min-h-screen grid grid-cols-1 lg:grid-cols-2">

  <!-- Left branding panel -->
  <div class="hidden lg:flex flex-col justify-between bg-navy text-white p-10 relative overflow-hidden bg-blue-900">
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
      <h2 class="text-3xl font-extrabold leading-tight">Tu voz importa<br>para tu barrio.</h2>
      <p class="text-slate-300 mt-3 text-sm max-w-sm">Crea tu cuenta gratis y empieza a reportar huecos, luminarias, basuras y más.</p>
      <ul class="space-y-3 mt-8 text-sm text-slate-200">
        <li> Reporta problemas en segundos</li>
        <li>Sigue el estado en tiempo real</li>
        <li>Apoya reportes de tus vecinos</li>
      </ul>
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

      <h1 class="text-2xl font-bold text-slate-800">Crea tu cuenta</h1>
      <p class="text-sm text-slate-500 mt-1.5">Únete y ayuda a mejorar Barranquilla desde tu barrio.</p>

      <form class="space-y-4 mt-7">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1.5">Nombre</label>
            <input type="text" required placeholder="Juan" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1.5">Apellido</label>
            <input type="text" required placeholder="Pérez" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1.5">Correo electrónico</label>
          <div class="relative">
            <input type="email" required placeholder="tucorreo@ejemplo.com" class="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1.5">Contraseña</label>
          <div class="relative">
            <input type="password" required placeholder="Mínimo 8 caracteres" class="w-full pl-9 pr-9 py-2.5 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
        </div>

        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold py-2.5 rounded-lg shadow-sm cursor-pointer">
          Crear cuenta
        </button>
      </form>

      <p class="text-sm text-slate-500 text-center mt-7">
        ¿Ya tienes una cuenta? <a href="/login" class="navigation text-blue-600 font-semibold hover:underline">Inicia sesión</a>
      </p>
    </div>
  </div>
</div>`
}