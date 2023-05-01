import lessToJson from 'less-to-json'
import path from 'path'


export default {
  mode: 'spa',
  router: {
    mode: 'history'
  },
  server: {
    host: '0.0.0.0'
  },

  srcDir: './src/',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cetus Protocol',
    htmlAttrs: {
      lang: 'en'
    },
    description:'Swap, earn and build on the pioneer MOVE-based liquidity protocol.',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Swap, earn and build on the pioneer MOVE-based liquidity protocol.'
      },
      // {
      //   'http-equiv': 'Content-Security-Policy',
      //   content: "script-src 'self'; object-src 'none'; style-src beta.hydraswap.io; child-src https:"
      // }
      // {
      //   'http-equiv': 'Content-Security-Policy',
      //   content: "object-src 'none';child-src https:"
      // }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico?t=5678'
    }],
    script: [{
      src: '/js/iconfont.js?t=1234567'
    }]
  },

  loadingIndicator: {
    // name: 'circle',
    name: 'pulse',
    // color: '#5ac4be',
    color: '#00ffd0',
    // background: '#131a35'
    background: '#000'
  },

  // loading: '@/components/Loading.vue',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      src: '@/styles/common.less',
      lang: 'less'
    }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vuescroll.ts',
    '@/plugins/vue-typed-js.ts'
  ],
  // router: {
  //   middleware: ['route']
  // },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://typed-vuex.roe.dev
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-clipboard',
    '@nuxtjs/dayjs',
    '@nuxtjs/google-gtag'
    // '@nuxtjs/sentry'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true, // 表示开启代理
    prefix: '/api', // 表示给请求url加个前缀 /api
    credentials: true // 表示跨域请求时是否需要使用凭证
  },

  proxy: {
    '/api': {
      // target: 'https://api.crema.finance', // 目标接口域名
      target: 'https://dev-api-crema.bitank.com', // 目标接口域名
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
        changeOrigin: true // 表示是否跨域
      }
    }
  },

  clipboard: {
    autoSetContainer: true
  },

  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    plugins: ['utc']
  },

  'google-gtag': {
    id: 'G-78BZ5BGCV5'
  },

  // sentry: {
  //   dsn: '',
  //   config: {}
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^ant-design-vue/, '@jup-ag/core'],

    loaders: {
      less: {
        javascriptEnabled: true,
      }
    },

    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'lib',
            style: true
          },
          'ant-design-vue'
        ]
        // 'transform-remove-console'
      ]
    },

    // extend(config) {
    //   config.resolve.alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, './src/utils/antd-icons.ts')
    // }

    extend(config, {
      isDev,
      isClient
    }) {
      config.resolve.alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, './src/utils/antd-icons.ts')
      if (isClient) {
        config.node = {
          fs: 'empty',
          child_process: 'empty'
        }
      }
      // if (isDev && isClient) {
      // config.module.rules.push({
      //   test: /\.(js)$/,
      //   loader: 'babel-loader'
      // // exclude: /(node_modules)/
      // include: /(node_modules)/
      // use: {
      //   loader: 'babel-loader',
      //   options: {
      //     // options选项里面配置的必须要写上
      //     presets: ['@babel/preset-env'],
      //     plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties']
      //   }
      // }
      // })

      config.module.rules.push({
        test: /.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      })
    }
  }
}
