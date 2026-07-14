export function reportFormTemplate(reportData = null) {
    const isEditMode = !!reportData;

    return `
        <section class="w-full max-w-2xl max-h-[95vh] overflow-y-auto rounded-lg border border-blue-100 bg-white p-5">
            <h1 class="mt-3 text-2xl font-black tracking-tight text-slate-900">Crear Nuevo Reporte</h1>

            <form id="create-report-form" class="mt-4 grid gap-5">
                <div class="grid gap-5 md:grid-cols-2">
                    <div>
                        <label class="mb-2 block text-sm font-medium text-slate-700" for="title">Titulo</label>
                        <input id="title" type="text" required placeholder="(Ej. Semáforo defectuoso)" class="w-full rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none" />
                    </div>

                    <div>
                        <label class="mb-2 block text-sm font-medium text-slate-700" for="status">Categoria</label>
                        <select id="category" class="w-full rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 focus:border-blue-400 focus:outline-none">
                            <option>Infraestructura</option>
                            <option>Limpieza urbana</option>
                            <option>Alumbrado</option>
                            <option>Movilidad</option>
                            <option>Servicios públicos</option>
                            <option>Seguridad</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="mb-2 block text-sm font-medium text-slate-700" for="description">Descripcion</label>
                    <textarea id="description" rows="4" placeholder="Describe el problema con el mayor detalle posible" class="w-full rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none"></textarea>
                </div>

                <div class="grid gap-5">
                    
                    <div>
                        <label class="mb-2 block text-sm font-medium text-slate-700">Evidencia fotográfica</label>

                        <button type="button" id="openCamera" class="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 text-white text-sm font-semibold py-3 hover:bg-blue-500 transition-colors cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                            </svg>
                            Abrir cámara
                        </button>

                        <label for="uploadPhoto" id="uploadPhotoLabel" class="hidden mt-3 w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-blue-200 bg-blue-50 text-sm font-medium text-slate-500 py-3 cursor-pointer hover:border-blue-400 hover:text-slate-900 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="17 8 12 3 7 8"></polyline>
                                <line x1="12" y1="3" x2="12" y2="15"></line>
                            </svg>
                            Subir foto desde el dispositivo
                        </label>

                        <input type="file" id="uploadPhoto" accept="image/*" capture="environment" class="hidden">

                        <video id="video" autoplay playsinline class="hidden mt-3 w-full aspect-video object-cover rounded-2xl border border-blue-100"></video>

                        <button type="button" id="takePhoto" class="hidden mt-3 w-full items-center justify-center gap-2 rounded-2xl bg-amber-500 text-white text-sm font-semibold py-3 hover:bg-amber-400 transition-colors cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                                <circle cx="12" cy="12" r="8"></circle>
                            </svg>
                            Tomar foto
                        </button>

                        <canvas id="canvas" class="hidden"></canvas>

                        <img id="preview" alt="Vista previa" class="hidden mt-3 w-full aspect-video object-cover rounded-2xl border border-blue-100">
                    </div>

                    <!-- Ubicación -->
                    <div>
                        <label class="mb-2 block text-sm font-medium text-slate-700">Ubicación</label>
                        <p class="text-xs text-slate-500 -mt-1 mb-2">Se detecta automáticamente al tomar la foto. Si falla, escríbela aquí.</p>

                        <div id="locationContainer" class="hidden">
                            <input type="text" id="location" placeholder="Ingrese la dirección manualmente" class="w-full rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none">
                        </div>

                        <p id="locationStatus" class="text-xs text-slate-500 mt-2"></p>
                    </div>
                </div>

                <div class="flex flex-col gap-3 pt-2 sm:flex-row">
                    <button type="submit" class="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-500 cursor-pointer">Guardar Reporte</button>

                    <button id="cancel-btn" type="reset" class="inline-flex items-center justify-center rounded-2xl border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50 cursor-pointer">Cancelar</button>
                </div>
            </form>
        </section>`;`