export function getStatusColor(status) {
    const colors = {
        "Pendiente": "bg-blue-500",
        "En revisión": "bg-amber-500",
        "Completado": "bg-green-500",
        "Rechazado": "bg-red-500"
    };
    return colors[status] || "bg-slate-500";
}