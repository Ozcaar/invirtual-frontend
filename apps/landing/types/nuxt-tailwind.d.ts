declare module 'nuxt/schema' {
  interface NuxtConfig {
    tailwindcss?: {
      cssPath?: string
      configPath?: string
      exposeConfig?: boolean
      viewer?: { endpoint?: string; exportViewer?: boolean }
    }
  }
}
export {}