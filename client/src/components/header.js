import { getSession } from "../services/auth.service";
import { verifyUser } from "../services/users.service";
import { title } from "../utils/titleToogle";

export function renderHeader() {

  const session = getSession()
  const name = `${session.name[0].toUpperCase()}${session.name.slice(1)}`;
  const fullName = `${session.name[0].toUpperCase()}${session.name.slice(1)} ${session.lastName[0].toUpperCase()}${session.lastName.slice(1)}`;
  
    return `
        <header class="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 gap-3 shrink-0 sticky inset-0 lg:left-64 z-1">
          <div class="flex items-center gap-3 min-w-0">
            <button class="menu-btn lg:hidden shrink-0 text-slate-500 hover:text-slate-700 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            <h1 class="text-base sm:text-lg font-bold text-slate-800 truncate">${title()}</h1>
          </div>
          <div class="flex items-center gap-3 sm:gap-5 shrink-0">
            <div class="flex items-center gap-2">
              <img src="https://i.pravatar.cc/64?img=33" class="w-8 h-8 rounded-full object-cover" alt="Admin">
              <span class="hidden sm:inline text-sm font-medium text-slate-700">${session.role == "alcaldia" ? `${name}` : `${fullName}`}</span>
            </div>
          </div>
        </header>`
}