import { renderSidebar } from "../components/sidebar";
import { renderHeader } from "../components/header";
import { getSession } from "../services/auth.service";

export function profile() {

    const session = getSession();

    return `
        <div class="flex min-h-screen">

        ${renderSidebar()}

            <div class="flex-1 flex flex-col min-w-0">

            ${renderHeader()}

                <!-- Content -->
                <main class="flex-1 overflow-y-auto p-4 sm:p-6">
                <div class="max-w-3xl mx-auto space-y-6">

                    <!-- ===== Formulario: Información personal ===== -->
                    <form id="profile-form-personal" class="bg-white rounded-2xl shadow-card border border-slate-100 p-5 sm:p-8">
                        <h2 class="text-xl font-bold text-slate-800">Información personal</h2>
                        <p class="text-sm text-slate-500 mt-1">Actualiza tus datos de contacto.</p>

                        <div class="space-y-5 mt-6">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1.5">Nombre</label>
                                <input type="text" name="name" value="${session.name}" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1.5">Apellido</label>
                                <input type="text" name="lastName" value="${session.lastName}" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1.5">Correo electrónico</label>
                                <div class="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="mail" aria-hidden="true" class="lucide lucide-mail w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                                <input type="email" name="email" value="${session.email}" class="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-end gap-3 mt-7 pt-6 border-t border-slate-100">
                            <button type="reset" class="px-5 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition cursor-pointer">
                                Cancelar
                            </button>
                            <button type="submit" class="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition cursor-pointer">
                                Guardar cambios
                            </button>
                        </div>
                    </form>

                    <!-- ===== Formulario: Seguridad ===== -->
                    <form id="profile-form-security" class="bg-white rounded-2xl shadow-card border border-slate-100 p-5 sm:p-8">
                        <h2 class="text-xl font-bold text-slate-800">Seguridad</h2>
                        <p class="text-sm text-slate if (!response.ok) {
            throw new Error("Failed to create user");
        }-500 mt-1">Actualiza tu contraseña para mantener tu cuenta protegida.</p>

                        <div class="space-y-5 mt-6">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1.5">Contraseña actual</label>
                                <div class="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="lock" aria-hidden="true" class="lucide lucide-lock w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>

                                    <input type="password" name="current-password" value="${session.password}" placeholder="••••••••" class="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                </div>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1.5">Nueva contraseña</label>
                                <div class="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="lock" aria-hidden="true" class="lucide lucide-lock w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
    
                                    <input id="new-password" type="password" name="new-password" placeholder="Mínimo 8 caracteres" class="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1.5">Confirmar nueva contraseña</label>
                                <div class="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="lock" aria-hidden="true" class="lucide lucide-lock w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>

                                <input id="confirn-new-password" type="password" name="confirm-password" placeholder="Repite la contraseña" class="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-end gap-3 mt-7 pt-6 border-t border-slate-100">
                            <button type="reset" class="px-6 py-2.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-600 text-sm font-semibold transition cursor-pointer">Cancelar</button>
                            <button type="submit" class="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition cursor-pointer">Actualizar contraseña</button>
                        </div>
                    </form>

                    <!-- ===== Zona de peligro ===== -->
                    <section class="bg-white rounded-2xl shadow-card border border-red-100 p-5 sm:p-8">
                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                            <h2 class="text-xl font-bold text-slate-800">Eliminar cuenta</h2>
                            <p class="text-sm text-slate-500 mt-1">Esta acción es permanente y eliminará todos tus reportes y datos.</p>
                            </div>
                            <button id="delete-account-btn" class="inline-flex items-center justify-center gap-2 border border-red-200 text-red-600 hover:bg-red-50 transition text-sm font-semibold px-5 py-2.5 rounded-lg shrink-0 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="trash-2" aria-hidden="true" class="lucide lucide-trash-2 w-4 h-4"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Eliminar mi cuenta
                            </button>
                        </div>
                    </section>

                </div>
                </main>
            </div>
        </div>`
}