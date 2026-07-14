import { renderSidebar } from "../components/sidebar";
import { renderHeader } from "../components/header";

export function allReports() {
    return `
        <div class="flex min-h-screen">

        ${renderSidebar()}
            
            <div class="flex-1 flex flex-col min-w-0">

            ${renderHeader()}

                <!-- Content -->
                <main class="flex-1 overflow-y-auto p-4 sm:p-6">
                
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-3">

                        <!-- Card 1 -->
                        <!-- Aqui van todos los reportes -->
                        <div class="bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden hover:shadow-md transition group cursor-pointer">
                            <div class="relative h-32 bg-slate-200">
                                <img src="https://images.unsplash.com/photo-1615403916271-1af1e7f2ecc9?w=400&amp;h=250&amp;fit=crop" class="w-full h-full object-cover" alt="Hueco en la vía">
                                <span class="absolute top-2 right-2 bg-amber-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">En revisión</span>
                            </div>
                            <div class="p-3.5">
                                <p class="font-semibold text-slate-800 text-sm">Hueco grande en la vía</p>
                                <p class="flex items-center gap-1 text-xs text-slate-500 mt-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map-pin" aria-hidden="true" class="lucide lucide-map-pin w-3.5 h-3.5">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg> Barrio El Prado
                                </p>
                                <div class="flex items-center justify-between mt-2 text-xs text-slate-400">
                                    <span class="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="calendar" aria-hidden="true" class="lucide lucide-calendar w-3.5 h-3.5">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg> 12 may. 2026
                                    </span>

                                    <!-- Boton editar -->
                                    <div class="flex items-center gap-1.5">
                                        <button class="w-7 h-7 flex items-center justify-center bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-blue-600 rounded-full transition cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="pencil" aria-hidden="true" class="w-3.5 h-3.5">
                                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                                <path d="m15 5 4 4"></path>
                                            </svg>
                                        </button>
                                        <!-- Boton eliminar -->
                                        <button onclick="event.preventDefault(); event.stopPropagation(); console.log('hola')" class="w-7 h-7 flex items-center justify-center bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-red-600 rounded-full transition cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="trash-2" aria-hidden="true" class="w-3.5 h-3.5">
                                                <path d="M10 11v6"></path>
                                                <path d="M14 11v6"></path>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                                <path d="M3 6h18"></path>
                                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </div>`
}