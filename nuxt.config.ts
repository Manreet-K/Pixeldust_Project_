import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css', 'vue3-carousel/carousel.css'],
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap'
        },
        { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon.png' },
      ]
    }
  },
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
})
