import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
          title: "thumbs up",
          meta: [
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ],
          script: [
            // <script src="https://myawesome-lib.js"></script>
          ],
          link: [
            { rel: 'icon', href: './assets/like-thumb-up-svgrepo-com.svg' }
          ],
          // please note that this is an area that is likely to change
          style: [
            // <style type="text/css">:root { color: red }</style>
          ]
        },
      }
})
