export default defineNuxtRouteMiddleware(async (to) => {
    const publicPaths = ['/', '/login', '/auth/callback']
    
    if (publicPaths.includes(to.path)) return

    const supabase = useSupabaseClient()
    const { data } = await supabase.auth.getSession()

    if (!data.session) {
        return navigateTo('/login')
    }
})
