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
    },
    invitations: {
      viewer: (id: string) => invitationsUrl + '/view/' + id,
    }
  }

  return routesCache
}
