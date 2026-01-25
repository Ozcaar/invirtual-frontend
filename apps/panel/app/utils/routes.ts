let routesCache: any = null

export const getRoutes = () => {
  if (routesCache) return routesCache

  const config = useRuntimeConfig().public

  const landingUrl = config.landingUrl
  const panelUrl = config.panelUrl
  const invitationsUrl = config.invitationsUrl

  routesCache = {
    landing: {
      home: landingUrl + '/',
      pricing: landingUrl + '/pricing',
      examples: landingUrl + '/examples',
    },
    panel: {
      home: panelUrl + '/',
      invitationBuilder: panelUrl + '/invitation-builder',
      dashboard: panelUrl + '/dashboard',
      confirmation: panelUrl + '/confirmation',
      login: panelUrl + '/login',
      register: panelUrl + '/register',
      recoverPassword: panelUrl + '/recover-password',
      privacyPolicy: panelUrl + '/privacy-policy',
      termsOfService: panelUrl + '/terms-of-service',
    },
    invitations: {
      viewer: (uuid: string, slug: string) => invitationsUrl + '/' + uuid + '/' + slug,
    },
    whatsAppShare: (message: string) =>
      'https://api.whatsapp.com/send?text=' + encodeURIComponent(message),
  }

  return routesCache
}
