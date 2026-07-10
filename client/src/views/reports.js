import { renderSidebar } from "../components/sidebar";
import { renderHeader } from "../components/header";
import { getSession } from "../services/auth.service";

export function reports() {
    return `
        <div class="flex min-h-screen">

        ${renderSidebar()}
            
            <div class="flex-1 flex flex-col min-w-0">

            ${renderHeader()}

                <!-- Content -->
                <main class="flex-1 overflow-y-auto p-4 sm:p-6">
                
                <h1 class="text-xl font-bold text-slate-800 flex items-center gap-2">${getSession().isAdmin ? 'Todos los Reportes' : 'Mis Reportes'}</h1>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-3">

                    <!-- Card 1 -->
                    <a href="detalle-reporte.html" class="bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden hover:shadow-md transition group">
                        <div class="relative h-32 bg-slate-200">
                        <img src="https://images.unsplash.com/photo-1615403916271-1af1e7f2ecc9?w=400&amp;h=250&amp;fit=crop" class="w-full h-full object-cover" alt="Hueco en la vía">
                        <span class="absolute top-2 right-2 bg-amber-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">En revisión</span>
                        </div>
                        <div class="p-3.5">
                        <p class="font-semibold text-slate-800 text-sm">Hueco grande en la vía</p>
                        <p class="flex items-center gap-1 text-xs text-slate-500 mt-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map-pin" aria-hidden="true" class="lucide lucide-map-pin w-3.5 h-3.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Barrio El Prado</p>
                        <div class="flex items-center justify-between mt-2 text-xs text-slate-400">
                            <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="calendar" aria-hidden="true" class="lucide lucide-calendar w-3.5 h-3.5"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg> 12 may. 2026</span>
                            <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="message-circle" aria-hidden="true" class="lucide lucide-message-circle w-3.5 h-3.5"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> 4</span>
                        </div>
                        </div>
                    </a>

                    <!-- Card 2 -->
                    <a href="detalle-reporte.html" class="bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden hover:shadow-md transition group">
                        <div class="relative h-32 bg-slate-800">
                        <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&amp;h=250&amp;fit=crop" class="w-full h-full object-cover opacity-90" alt="Poste sin luz">
                        <span class="absolute top-2 right-2 bg-green-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">Solucionado</span>
                        </div>
                        <div class="p-3.5">
                        <p class="font-semibold text-slate-800 text-sm">Poste sin luz</p>
                        <p class="flex items-center gap-1 text-xs text-slate-500 mt-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map-pin" aria-hidden="true" class="lucide lucide-map-pin w-3.5 h-3.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Barrio Riomar</p>
                        <div class="flex items-center justify-between mt-2 text-xs text-slate-400">
                            <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="calendar" aria-hidden="true" class="lucide lucide-calendar w-3.5 h-3.5"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg> 10 may. 2026</span>
                            <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="message-circle" aria-hidden="true" class="lucide lucide-message-circle w-3.5 h-3.5"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> 2</span>
                        </div>
                        </div>
                    </a>

                    <!-- Card 3 -->
                    <a href="detalle-reporte.html" class="bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden hover:shadow-md transition group">
                        <div class="relative h-32 bg-slate-200">
                        <img src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=400&amp;h=250&amp;fit=crop" class="w-full h-full object-cover" alt="Basura acumulada">
                        <span class="absolute top-2 right-2 bg-amber-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">En revisión</span>
                        </div>
                        <div class="p-3.5">
                        <p class="font-semibold text-slate-800 text-sm">Basura acumulada</p>
                        <p class="flex items-center gap-1 text-xs text-slate-500 mt-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map-pin" aria-hidden="true" class="lucide lucide-map-pin w-3.5 h-3.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Barrio Ciudadela 20 de Julio</p>
                        <div class="flex items-center justify-between mt-2 text-xs text-slate-400">
                            <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="calendar" aria-hidden="true" class="lucide lucide-calendar w-3.5 h-3.5"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg> 9 may. 2026</span>
                            <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="message-circle" aria-hidden="true" class="lucide lucide-message-circle w-3.5 h-3.5"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> 6</span>
                        </div>
                        </div>
                    </a>

                    <!-- Card 4 -->
                    <a href="detalle-reporte.html" class="bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden hover:shadow-md transition group">
                        <div class="relative h-32 bg-sky-200">
                        <img src="https://images.unsplash.com/photo-1573883430696-cb0854d0b7c8?w=400&amp;h=250&amp;fit=crop" class="w-full h-full object-cover" alt="Semáforo dañado">
                        <span class="absolute top-2 right-2 bg-blue-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">Pendiente</span>
                        </div>
                        <div class="p-3.5">
                        <p class="font-semibold text-slate-800 text-sm">Semáforo dañado</p>
                        <p class="flex items-center gap-1 text-xs text-slate-500 mt-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map-pin" aria-hidden="true" class="lucide lucide-map-pin w-3.5 h-3.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Barrio Centro</p>
                        <div class="flex items-center justify-between mt-2 text-xs text-slate-400">
                            <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="calendar" aria-hidden="true" class="lucide lucide-calendar w-3.5 h-3.5"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg> 8 may. 2026</span>
                            <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="message-circle" aria-hidden="true" class="lucide lucide-message-circle w-3.5 h-3.5"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> 1</span>
                        </div>
                        </div>
                    </a>

                    <!-- Card 1 -->
                    <a href="detalle-reporte.html" class="bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden hover:shadow-md transition group">
                        <div class="relative h-32 bg-slate-200">
                        <img src="https://images.unsplash.com/photo-1615403916271-1af1e7f2ecc9?w=400&amp;h=250&amp;fit=crop" class="w-full h-full object-cover" alt="Hueco en la vía">
                        <span class="absolute top-2 right-2 bg-amber-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">En revisión</span>
                        </div>
                        <div class="p-3.5">
                        <p class="font-semibold text-slate-800 text-sm">Hueco grande en la vía</p>
                        <p class="flex items-center gap-1 text-xs text-slate-500 mt-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map-pin" aria-hidden="true" class="lucide lucide-map-pin w-3.5 h-3.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Barrio El Prado</p>
                        <div class="flex items-center justify-between mt-2 text-xs text-slate-400">
                            <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="calendar" aria-hidden="true" class="lucide lucide-calendar w-3.5 h-3.5"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg> 12 may. 2026</span>
                            <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="message-circle" aria-hidden="true" class="lucide lucide-message-circle w-3.5 h-3.5"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> 4</span>
                        </div>
                        </div>
                    </a>

                    <!-- Card 2 -->
                    <a href="detalle-reporte.html" class="bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden hover:shadow-md transition group">
                        <div class="relative h-32 bg-slate-800">
                        <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&amp;h=250&amp;fit=crop" class="w-full h-full object-cover opacity-90" alt="Poste sin luz">
                        <span class="absolute top-2 right-2 bg-green-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">Solucionado</span>
                        </div>
                        <div class="p-3.5">
                        <p class="font-semibold text-slate-800 text-sm">Poste sin luz</p>
                        <p class="flex items-center gap-1 text-xs text-slate-500 mt-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map-pin" aria-hidden="true" class="lucide lucide-map-pin w-3.5 h-3.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Barrio Riomar</p>
                        <div class="flex items-center justify-between mt-2 text-xs text-slate-400">
                            <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="calendar" aria-hidden="true" class="lucide lucide-calendar w-3.5 h-3.5"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg> 10 may. 2026</span>
                            <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="message-circle" aria-hidden="true" class="lucide lucide-message-circle w-3.5 h-3.5"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> 2</span>
                        </div>
                        </div>
                    </a>

                    <!-- Card 3 -->
                    <a href="detalle-reporte.html" class="bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden hover:shadow-md transition group">
                        <div class="relative h-32 bg-slate-200">
                        <img src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=400&amp;h=250&amp;fit=crop" class="w-full h-full object-cover" alt="Basura acumulada">
                        <span class="absolute top-2 right-2 bg-amber-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">En revisión</span>
                        </div>
                        <div class="p-3.5">
                        <p class="font-semibold text-slate-800 text-sm">Basura acumulada</p>
                        <p class="flex items-center gap-1 text-xs text-slate-500 mt-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map-pin" aria-hidden="true" class="lucide lucide-map-pin w-3.5 h-3.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Barrio Ciudadela 20 de Julio</p>
                        <div class="flex items-center justify-between mt-2 text-xs text-slate-400">
                            <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="calendar" aria-hidden="true" class="lucide lucide-calendar w-3.5 h-3.5"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg> 9 may. 2026</span>
                            <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="message-circle" aria-hidden="true" class="lucide lucide-message-circle w-3.5 h-3.5"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> 6</span>
                        </div>
                        </div>
                    </a>

                    <!-- Card 4 -->
                    <a href="detalle-reporte.html" class="bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden hover:shadow-md transition group">
                        <div class="relative h-32 bg-sky-200">
                        <img src="https://images.unsplash.com/photo-1573883430696-cb0854d0b7c8?w=400&amp;h=250&amp;fit=crop" class="w-full h-full object-cover" alt="Semáforo dañado">
                        <span class="absolute top-2 right-2 bg-blue-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">Pendiente</span>
                        </div>
                        <div class="p-3.5">
                        <p class="font-semibold text-slate-800 text-sm">Semáforo dañado</p>
                        <p class="flex items-center gap-1 text-xs text-slate-500 mt-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map-pin" aria-hidden="true" class="lucide lucide-map-pin w-3.5 h-3.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Barrio Centro</p>
                        <div class="flex items-center justify-between mt-2 text-xs text-slate-400">
                            <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="calendar" aria-hidden="true" class="lucide lucide-calendar w-3.5 h-3.5"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg> 8 may. 2026</span>
                            <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="message-circle" aria-hidden="true" class="lucide lucide-message-circle w-3.5 h-3.5"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> 1</span>
                        </div>
                        </div>
                    </a>
                </div>

                </main>
            </div>
        </div>`
}