export function notFound() {
  return `
    <div class="min-h-screen flex flex-col items-center justify-center px-6 text-center">

  <div class="flex items-center gap-2.5 mb-10">
    <div class="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
    </div>
    <div class="leading-tight text-left">
      <p class="font-bold text-sm tracking-wide text-slate-800">QUILLALERT</p>
      <p class="text-[10px] text-slate-400 tracking-wider">BARRANQUILLA</p>
    </div>
  </div>

  <div class="relative">
    <p class="text-8xl sm:text-9xl md:text-[130px] leading-none font-extrabold text-navy/90 select-none">404</p>
    <div class="absolute -top-2 right-0 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-amber-400 flex items-center justify-center shadow-lg rotate-12">
    </div>
  </div>

  <h1 class="text-xl font-bold text-slate-800 mt-2">No encontramos esta calle en el mapa</h1>
  <p class="text-sm text-slate-500 mt-2 max-w-sm">La página que buscas no existe o fue movida. Verifica la dirección o vuelve al inicio.</p>

  <div class="flex flex-wrap items-center justify-center gap-3 mt-8">
    <a href="/login" class="navigation inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm">
    Volver al inicio
    </a>
  </div>

</div>`
}