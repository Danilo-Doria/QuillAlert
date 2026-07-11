const routeTitle = {
  "/panel": "Panel de Control",
  "/reports": "Reportes",
  "/users": "Usuarios",
  "/map": "Mapa",
  "/profile": "Perfil"
};

export function title() {
  const path = window.location.pathname;
  return routeTitle[path] || "";
}