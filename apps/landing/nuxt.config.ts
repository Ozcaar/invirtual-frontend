import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  srcDir: 'app/',
  routeRules: {
    '/': { redirect: '/home' },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@invirtual/nuxt-ui'
  ],

  fonts: {
    families: [{ name: 'Poppins', provider: 'google' }],
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    }
  },


  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['./app/assets/styles/app.css'],

  runtimeConfig: {
    // apiSecret: '',

    public: {
      panelUrl: '',
      landingUrl: '',
      builderUrl: '',
    }
  },
  
  nitro: {
    preset: 'cloudflare-pages'
  }
})
