export const menuItems = [
    { id: 'panel', label: 'Inicio', icon: 'lucide-house', slug: '/panel' },
    { id: 'invitations', label: 'Invitaciones', icon: 'lucide-mail', slug: '/panel/invitations' },
    { id: 'guests', label: 'Invitados', icon: 'lucide-users', slug: '/panel/guests' },
    { id: 'statistics', label: 'Estadísticas', icon: 'lucide-bar-chart-2', slug: '/panel/statistics' },
    { id: 'account', label: 'Cuenta', icon: 'lucide-settings', slug: '/panel/account' },
]


// Hardoced data
export const attendanceData = [
    { name: 'Confirmados', value: 247, fill: 'var(--color-primary)' },
    { name: 'Pendientes', value: 89, fill: 'var(--color-secondary)' },
    { name: 'Rechazados', value: 34, fill: 'var(--color-destructive)' },
]

export const invitationsActivityData = [
    { name: 'Ene', total: 4, confirmadas: 3 },
    { name: 'Feb', total: 6, confirmadas: 4 },
    { name: 'Mar', total: 8, confirmadas: 6 },
    { name: 'Abr', total: 5, confirmadas: 3 },
    { name: 'May', total: 9, confirmadas: 7 },
    { name: 'Jun', total: 10, confirmadas: 8 },
]

export const invitationsData = [
   { name: 'Total de Invitaciones', icon: 'lucide-mail', value: '24', label: 'Todas activas' },
   { name: 'Invitados Confirmados', icon: 'lucide-users', value: '247', label: '73% de asistencia' },
   { name: 'Pendientes', icon: 'lucide-clock', value: '89', label: 'Esperando respuesta' },
   { name: 'Tasa de Confirmación', icon: 'lucide-circle-check', value: '73%', label: 'vs 68% promedio' },
]