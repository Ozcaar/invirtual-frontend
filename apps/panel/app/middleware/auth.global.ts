export default defineNuxtRouteMiddleware((to) => {
    const publicPaths = new Set(['/', '/login', '/auth/callback'])
    if (publicPaths.has(to.path)) return

    if (!to.meta.auth) return

    const session = useSupabaseSession()
    if (!session.value) return navigateTo('/login')

})
