import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false,
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@invirtual/nuxt-ui',
    'nuxt-charts',
  ],

  app: {
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  routeRules: {
    '/': { redirect: '/panel' },
  },

  fonts: {
    families: [{ name: 'Poppins', provider: 'google' }],
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
    resolve: {
      alias: {
        'to-px': 'to-px/browser.js',
        'striptags': 'striptags/src/striptags.js'
      }
    },
    optimizeDeps: {
      include: [
        'to-px',
        'to-px/browser.js',
        'striptags',
        'striptags/src/striptags.js',
        '@unovis/ts'
      ]
    },
    ssr: {
      noExternal: [
        'to-px',
        'striptags',
        '@unovis',
        '@unovis/ts',
        'nuxt-charts'
      ]
    }
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