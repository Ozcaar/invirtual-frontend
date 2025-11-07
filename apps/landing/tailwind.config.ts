// @ts-ignore
import daisyui from "daisyui"

export default {
  content: [
    "./app/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          500: '#222222',
        }
      }
    },
  },
  daisyui: {
  },
  plugins: [daisyui]
}
