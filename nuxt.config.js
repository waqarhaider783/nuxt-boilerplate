import { resolve } from 'path'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Reusable Components',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/png/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/imageFN',
    '~/plugins/utilsFN',
    '~/plugins/getSEOData',
    '~/plugins/vue-awesome-swiper',
    // '~/plugins/vue-tel-input',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Follow shortcuts/symlinks in the codebase to help reduce code duplication
  followSymlinks: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/apollo',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  fontawesome: {
    icons: {
      solid: [
        'faBars',
        'faTimes',
        'faFolderOpen',
        'faExternalLinkAlt',
        'faSearch',
        'faCheck',
        'faClock',
        'faChevronDown',
        'faUser',
        'faEnvelope',
        'faLongArrowAltRight',
        'faShoppingCart',
        'faCircle',
        'faStar',
        'faCertificate',
        'faToggleOff',
        'faBookmark',
        'faHeart',
        'faShareAlt',
        'faPhoneAlt',
        'faMapMarkerAlt',
        'faInfoCircle',
        'faUpload',
        'faPlus',
        'faHome',
        'faPen',
        'faEllipsisH',
      ],
      regular: [
        'faClock',
        'faCheckSquare',
        'faEnvelope',
        'faHeart',
        'faBookmark',
        'faBell',
        'faUserCircle',
        'faCommentAlt',
        'faPaperPlane',
      ],
      brands: [
        'faGithub',
        'faFacebook',
        'faTwitter',
        'faGooglePlusG',
        'faLinkedinIn',
        'faInstagram',
        'faTelegramPlane',
        'faBehance',
      ],
    },
  },

  googleFonts: {
    families: {
      Poppins: {
        wght: [300, 400, 500, 600, 700],
      },
    },
    display: 'swap',
    preconnect: true,
    preload: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: { sourceMap: false },
    },
    // extend(config, { loaders: { less } }) {
    //   less.javascriptEnabled = true
    // },
  },

  // To Run Project On Local Ip
  server: {
    host: 0,
    port: '3000',
  },

  apollo: {
    clientConfigs: {
      default: {
        // httpEndpoint: 'https://gc.crankup.net/graphql',
        httpEndpoint: 'https://development.8thloopdataserver.com/graphql',
      },
    },
  },

  alias: {
    fonts: resolve(__dirname, './assets/fonts'),
    images: resolve(__dirname, './assets/images'),
    styles: resolve(__dirname, './assets/scss'),
    components: resolve(__dirname, './components'),
    layouts: resolve(__dirname, './layouts'),
    pages: resolve(__dirname, './pages'),
  },
}
