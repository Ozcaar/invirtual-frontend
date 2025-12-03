export const MENU_ITEMS = [
    { id: 'panel', label: 'Inicio', icon: 'lucide-house', slug: '/panel' },
    { id: 'invitations', label: 'Invitaciones', icon: 'lucide-mail', slug: '/panel/invitations' },
    { id: 'guests', label: 'Invitados', icon: 'lucide-users', slug: '/panel/guests' },
    { id: 'statistics', label: 'Estadísticas', icon: 'lucide-bar-chart-2', slug: '/panel/statistics' },
    { id: 'account', label: 'Cuenta', icon: 'lucide-settings', slug: '/panel/account' },
]


// Hardoced data
export const ATTENDANCE_DATA = [
    { name: 'Confirmados', value: 247, fill: 'var(--color-primary)' },
    { name: 'Pendientes', value: 89, fill: 'var(--color-secondary)' },
    { name: 'Rechazados', value: 34, fill: 'var(--color-destructive)' },
]

export const INVITATIONS_ACTIVITY_DATA = [
    { month: 'Ene', total: 4, confirmed: 3 },
    { month: 'Feb', total: 6, confirmed: 4 },
    { month: 'Mar', total: 8, confirmed: 6 },
    { month: 'Abr', total: 5, confirmed: 3 },
    { month: 'May', total: 9, confirmed: 7 },
    { month: 'Jun', total: 10, confirmed: 8 },
]

export const INVITATIONS_DATA = [
    { name: 'Total de Invitaciones', icon: 'lucide-mail', value: '24', label: 'Todas activas' },
    { name: 'Invitados Confirmados', icon: 'lucide-users', value: '247', label: '73% de asistencia' },
    { name: 'Pendientes', icon: 'lucide-clock', value: '89', label: 'Esperando respuesta' },
    { name: 'Tasa de Confirmación', icon: 'lucide-circle-check', value: '73%', label: 'vs 68% promedio' },
]