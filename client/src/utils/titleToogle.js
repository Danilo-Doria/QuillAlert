const routeTitle = {
  "/panel": "Panel de Control",
  "/reports": "Mis Reportes",
  "/all-reports": "Todos los Reportes",
  "/users": "Usuarios",
  "/map": "Mapa",
  "/profile": "Perfil"
};

export function title() {
  const path = window.location.pathname;
  return routeTitle[path] || "";
}