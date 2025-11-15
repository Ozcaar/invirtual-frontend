import { defineNuxtModule, addComponentsDir, addImportsDir, createResolver, addLayout } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@invirtual/nuxt-ui',
    configKey: 'invirtualUi'
  },

  defaults: {
    includeStyles: true
  },

  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Components
    addComponentsDir({
      path: resolver.resolve('components'),
      pathPrefix: true,
      extensions: ['vue'],
      watch: true
    })

    // Layouts
    addLayout({
      src: resolver.resolve('layouts/default.vue'),
      filename: 'default.vue',
    }, 'default')
    
    addLayout({
      src: resolver.resolve('layouts/minimal.vue'),
      filename: 'minimal.vue',
    }, 'minimal')

    addLayout({
      src: resolver.resolve('layouts/landing.vue'),
      filename: 'landing.vue',
    }, 'landing')

    // Composables
    addImportsDir(resolver.resolve('composables'))

    // Global styles
    if (options.includeStyles) {
      nuxt.options.css.push(resolver.resolve('styles/theme.css'))
    }
  }
})
