import { resolve } from 'pathe'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  app: {
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  srcDir: 'app/',
  routeRules: {
    '/': { redirect: '/landing' },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss',
  ],

  fonts: {
    families: [{ name: 'Poppins', provider: 'google' }],
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    }
  },

  css: [resolve(__dirname, 'assets/css/tailwind.css')],

  vite: {
    // plugins: [tsconfigPaths()]
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  tailwindcss: {
    cssPath: resolve(__dirname, 'assets/css/tailwind.css'),
    configPath: resolve(__dirname, 'tailwind.config.ts'),
    exposeConfig: false,
    viewer: {
      endpoint: '/_tailwind',
      exportViewer: true
    }
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },

  nitro: {
    preset: 'cloudflare-pages'
  }
})
