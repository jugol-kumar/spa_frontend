// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@pinia/nuxt',
  ],
  tailwindcss: {
    cssPath: "~/assets/main.css",
  },
  build:{
    transpile:["@headlessui/vue"]
  }
})
