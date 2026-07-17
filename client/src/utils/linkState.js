export function updateLinks() {
    const links = document.querySelectorAll('nav .navigation');
    const activeClasses = ['bg-blue-600', 'text-white'];
    const inactiveClasses = ['text-slate-300', 'hover:bg-white/5', 'hover:text-white'];
    const currentPath = window.location.pathname;
    
    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        link.classList.remove(...activeClasses, ...inactiveClasses);

        if (linkPath === currentPath) {
            link.classList.add(...activeClasses);
        } else {
            link.classList.add(...inactiveClasses);
        }
    });
}