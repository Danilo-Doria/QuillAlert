export function reportDetail() {
    return `
    <div class="max-w-3xl mx-auto py-6 sm:py-8 px-3 sm:px-4">

        <div class="flex items-center justify-between mb-4 gap-2">
            <a href="/panel" class="navigation inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-700 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="arrow-left" aria-hidden="true" class="lucide lucide-arrow-left w-4 h-4"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg> Volver
            </a>
            <span class="bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shrink-0">En revisión</span>
        </div>

        <div class="bg-white rounded-2xl shadow-card border border-slate-100 p-4 sm:p-6 md:p-8">

            <h1 class="text-xl font-bold text-slate-800">Detalle del reporte</h1>

            <img src="https://images.unsplash.com/photo-1615403916271-1af1e7f2ecc9?w=800&amp;h=500&amp;fit=crop" class="w-full h-48 sm:h-64 object-cover rounded-xl mt-4" alt="Hueco grande en la vía">

            <div class="mt-5">
            <h2 class="text-lg font-bold text-slate-800">Hueco grande en la vía</h2>
            <div class="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2 text-sm text-slate-500">
                <span class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map-pin" aria-hidden="true" class="lucide lucide-map-pin w-4 h-4"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Barrio El Prado</span>
                <span class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="user" aria-hidden="true" class="lucide lucide-user w-4 h-4"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Creado por Juan Pérez</span>
                <span class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="clock" aria-hidden="true" class="lucide lucide-clock w-4 h-4"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg> 12 mayo 2026 - 8:30 a. m.</span>
            </div>
            <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                Hueco profundo en la carrera 54 con calle 79, dificulta el tránsito de vehículos y motos.
            </p>
            <span class="inline-flex items-center gap-1.5 mt-3 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="construction" aria-hidden="true" class="lucide lucide-construction w-3.5 h-3.5"><rect x="2" y="6" width="20" height="8" rx="1"></rect><path d="M17 14v7"></path><path d="M7 14v7"></path><path d="M17 3v3"></path><path d="M7 3v3"></path><path d="M10 14 2.3 6.3"></path><path d="m14 6 7.7 7.7"></path><path d="m8 6 8 8"></path></svg> Infraestructura
            </span>
            </div>

            <div class="mt-6">
            <div class="border border-slate-100 rounded-xl p-4">
                <p class="text-sm font-bold text-slate-800 mb-2">Ubicación</p>
                <p class="text-sm text-slate-500 mb-3">Cra. 54 con Calle 79, El Prado</p>
                <div class="h-24 rounded-lg bg-slate-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map" aria-hidden="true" class="lucide lucide-map w-6 h-6 text-slate-400"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
                </div>
            </div>
            </div>

            <div class="mt-6">
            <p class="text-sm font-bold text-slate-800 mb-3">Historial del reporte</p>
            <div class="space-y-4">
                <div class="flex gap-3">
                <div class="w-2.5 h-2.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                <div>
                    <p class="text-sm text-slate-700 font-medium">12 mayo 2026 - 8:30 a. m.</p>
                    <p class="text-sm text-slate-500">Reporte creado</p>
                </div>
                </div>
                <div class="flex gap-3">
                <div class="w-2.5 h-2.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                <div>
                    <p class="text-sm text-slate-700 font-medium">13 mayo 2026 - 10:20 a. m.</p>
                    <p class="text-sm text-slate-500">El reporte está siendo revisado por la administración.</p>
                </div>
                </div>
            </div>
            </div>

        </div>
    </div>`
}