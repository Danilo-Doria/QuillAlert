import { getSession } from "../services/auth.service";

export function renderHeader() {

  const session = getSession()

    return `

        ${session.role == 'alcaldia' ? `<header class="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 gap-3 shrink-0">
          <div class="flex items-center gap-3 min-w-0">
            <button class="menu-btn lg:hidden shrink-0 text-slate-500 hover:text-slate-700 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            <h1 class="text-base sm:text-lg font-bold text-slate-800 truncate">Panel de control</h1>
          </div>
          <div class="flex items-center gap-3 sm:gap-5 shrink-0">
            <div class="flex items-center gap-2">
              <img src="https://i.pravatar.cc/64?img=33" class="w-8 h-8 rounded-full object-cover" alt="Admin">
              <span class="hidden sm:inline text-sm font-medium text-slate-700">Admin</span>
            </div>
          </div>
        </header>` : `<header class="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 gap-3 shrink-0">
        <button onclick="toggleSidebar()" class="lg:hidden shrink-0 text-slate-500 hover:text-slate-700">
        </button>
        <div class="relative w-full max-w-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="search" aria-hidden="true" class="lucide lucide-search w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>

          <input type="text" placeholder="Buscar reportes, categorías, barrios..." class="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-100 border border-transparent text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition">
        </div>
        <div class="flex items-center gap-3 sm:gap-5 pl-2 sm:pl-6 shrink-0">
          <button class="flex items-center gap-2">
            <img src="https://i.pravatar.cc/64?img=12" class="w-8 h-8 rounded-full object-cover" alt="Juan Pérez">
            <span class="hidden sm:inline text-sm font-medium text-slate-700">Juan Pérez</span>
          </button>
        </div>
      </header>`}`
}