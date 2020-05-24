const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const customEnv = process.env.CUSTOM_ENV

require('dotenv').config({ path: customEnv ? `.env.${customEnv}` : '.env' })

module.exports = {
  env: {
    ...process.env
  },
  router: {
    linkActiveClass: 'select'
    // extendRoutes (routes, resolve) {
    //   routes.push({
    //     name: 'custom',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/404.vue')
    //   })
    // }
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/css/bootstrap-datepicker.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.11/css/all.css' },
      { rel: 'stylesheet', href: '/css/TLstyle.css' }

    ],
    script: [
      { type: 'text/javascript', src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' },
      { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/js/bootstrap-datepicker.min.js' },
      { type: 'text/javascript', src: '/js/locales/bootstrap-datepicker.zh-CN.min.js' },
      { type: 'text/javascript', src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' },
      { type: 'text/javascript', src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' },
      { type: 'text/javascript', src: '/js/script.js' }

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#666' },
  loading: '~/components/Loading.vue',
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    // 'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
    './assets/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/bus',
    '@/plugins/element-ui',
    '@/plugins/utils',
    '@/plugins/vuelidate',
    '@/plugins/components',
    '@/plugins/axios',
    '@/plugins/apiHub',
    '@/plugins/mixins',
    '@/plugins/filters',
    { src: '@/plugins/store2', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
    // '@nuxtjs/auth'
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          // login: { url: 'passport/member/login', method: 'post', propertyName: 'access_token' },
          // logout: { url: 'client/logout', method: 'get' },
          // user: { url: 'client/profile', method: 'get', propertyName: '' }
        },
        autoFetchUser: false
      }
    },
    localStorage: false,
    watchLoggedIn: false,
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/'
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    withCredentials: true,
    baseURL: `${process.env.PROTOCOL}://${process.env.API_BASE_URL}`
  },
  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ],
    transpile: [
      /^element-ui/,
      'vee-validate/dist/rules'
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vue-slick/]
          })
        ]
      }

      // config.module.rules.push({
      //   enforce: 'pre',
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   exclude: /(node_modules)/,
      //   options: {
      //     fix: true
      //   }
      // })
    }
  },
  serverMiddleware: [
  ]
}
