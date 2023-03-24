export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/main.scss" as *;'
        }
      }
    }
  }, 
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo'
  ]
})