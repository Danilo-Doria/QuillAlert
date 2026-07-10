import { getSession } from "../services/auth.service";

export function notFound() {
  return `
    <div class="min-h-screen flex flex-col items-center justify-center px-6 text-center">

  <div class="flex items-center gap-2.5 mb-10">
    <div class="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-5 h-5 text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
    </div>
    <div class="leading-tight text-left">
      <p class="font-bold text-sm tracking-wide text-slate-800">QUILLALERT</p>
      <p class="text-[10px] text-slate-400 tracking-wider">BARRANQUILLA</p>
    </div>
  </div>

  <div class="relative">
    <p class="text-8xl sm:text-9xl md:text-[130px] leading-none font-extrabold text-navy/90 select-none">404</p>
    <div class="absolute -top-2 right-0 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-amber-400 flex items-center justify-center shadow-lg rotate-12">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-5 h-5 sm:w-7 sm:h-7 text-white"><path d="M12.75 7.09a3 3 0 0 1 2.16 2.16"></path><path d="M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"></path><path d="m2 2 20 20"></path><path d="M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533"></path><path d="M9.13 9.13a3 3 0 0 0 3.74 3.74"></path></svg>
    </div>
  </div>

  <h1 class="text-xl font-bold text-slate-800 mt-2">No encontramos esta calle en el mapa</h1>
  <p class="text-sm text-slate-500 mt-2 max-w-sm">La página que buscas no existe o fue movida. Verifica la dirección o vuelve al inicio.</p>

  <div class="flex flex-wrap items-center justify-center gap-3 mt-8">
    <a href="${getSession() ? '/panel' : '/'}" class="navigation inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-4 h-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>

    Volver al inicio
    </a>
  </div>

</div>`
}