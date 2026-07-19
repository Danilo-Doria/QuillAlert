// asign default values for title and subtitle if they are not provided, and return the HTML for the "nothing to show" message, the empty object destructuring in the function parameter allows for optional arguments, and the default values are set to "Nada que mostrar" and "No hay reportes actualmente." respectively.
export const nothingToShow = ({title = "Nada que mostrar", subtitle = "No hay reportes actualmente."}={}) => {
    return `
        <div class="flex flex-col items-center justify-center h-full text-center">
            <h2 class="text-lg font-semibold text-gray-900">${title}</h2>
            <p class="text-gray-500">${subtitle}</p>
        </div>
    `;
}