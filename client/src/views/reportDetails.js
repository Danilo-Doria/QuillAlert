export function reportDetail() {
    return `
    <div class="max-w-3xl mx-auto py-6 sm:py-8 px-3 sm:px-4">

        <div class="flex items-center justify-between mb-4 gap-2">
            <button id="btn-back" class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-700 shrink-0 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-4 h-4"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg> Volver
            </button>
            <span id="status" class="bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shrink-0"></span>
        </div>

        <div class="bg-white rounded-2xl shadow-card border border-slate-100 p-4 sm:p-6 md:p-8">

            <h1 class="text-xl font-bold text-slate-800">Detalle del reporte</h1>

            <img id="img" src="" class="w-full h-48 sm:h-64 object-cover rounded-xl mt-4" alt="Reporte">

            <div class="mt-5">
            <h2 id ="title" class="text-lg font-bold text-slate-800"></h2>
            <div class="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2 text-sm text-slate-500">
                <span id="user" class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-4 h-4"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                <p id="date" class="flex items-center gap-1.5"></p>
            </div>
            <p id="description" class="text-sm text-slate-600 mt-4"></p>
            <p id="coords" class="text-sm text-slate-600 mt-4"></p>
            <span id="category" class="inline-flex items-center gap-1.5 mt-3 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                
            </span>
        </div>
    </div>`
}