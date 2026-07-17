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
                    
                    <div id="report-form" class="hidden fixed inset-0 z-50 items-center justify-center bg-slate-900/60 p-4"></div> 
                     
                    <div id="reports-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-3">

                        
                    </div>

                </main>
            </div>
        </div>`
}