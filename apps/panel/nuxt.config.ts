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
    '@nuxtjs/supabase'
  ],

  supabase: {
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    key: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    redirect: false,
  },

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
        'striptags': 'striptags/src/striptags.js',
        cookie: 'cookie-es',
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
    public: {
      panelUrl: '',
      landingUrl: '',
      builderUrl: '',

      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    }
  },

  nitro: {
    preset: 'cloudflare-pages'
  }
})