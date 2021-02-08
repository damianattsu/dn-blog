require('dotenv').config();
const { API_KEY } = process.env;

import axios from 'axios'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'micro-dn-blog',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: 'assets/css/app.scss', lang: 'scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extractCSS: true,
  },

  privateRuntimeConfig: {
    apiKey: '0217a727-1f1d-4c5a-bbef-9bf429a7b3fc'
  },
  publicRuntimeConfig: {
    apiKey: process.env.NODE_ENV !== 'production' ? '0217a727-1f1d-4c5a-bbef-9bf429a7b3fc' : undefined
  },
  generate: {
    async routes() {
      const pages = await axios
        .get('https://dn-blog.microcms.io/api/v1/blog?limit=100', {
          headers: { 'X-API-KEY': '0217a727-1f1d-4c5a-bbef-9bf429a7b3fc' }
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/${content.id}`,
            payload: content
          }))
        )
      return pages
    }
  }
}
