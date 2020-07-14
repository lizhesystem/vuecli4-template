const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const resolve = dir => path.join(__dirname, dir)

// 设置svg sprite
const svgSprite = config => {
  const svgRule = config.module.rule('svg')
  svgRule.uses.clear()
  svgRule.include
    .add(path.resolve(__dirname, 'src/assets/svgs'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({})
    .end()
    .use('svgo-loader')
    .loader('svgo-loader')
    .options({
      plugins: [{ removeViewBox: false }, { removeXMLNS: true }]
    })
    .end()
}

// 设置cdn
const setCDN = config => {
  if (process.env.NODE_ENV !== 'production') return

  const assetsCDN = {
    // webpack build externals
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      'element-ui': 'ELEMENT',
      axios: 'axios'
    },
    css: [
    ],
    js: [
      '//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
      '//cdn.jsdelivr.net/npm/vue-router@3.2.0/dist/vue-router.min.js',
      '//cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js',
      '//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js',
      '//unpkg.com/element-ui@2.13.2/lib/index.js'
    ]
  }
  config.externals(assetsCDN.externals)
  config.plugin('html')
    .tap(args => {
      args[0].cdn = assetsCDN
      return args
    })
}

// 生成环境删除console、debugger
const dropConsole = config => {
  if (process.env.NODE_ENV !== 'production') return

  const terser = config.optimization.minimizer('terser')
  terser.tap(args => {
    args[0].terserOptions.compress = {
      ...args[0].terserOptions.compress,
      // 不在控制台警告并去除console、debugger
      warnings: false,
      drop_console: true,
      drop_debugger: true
    }
    return args
  })
}

// 启用本地 gzip 压缩
const enableGZip = config => {
  if (!process.env.VUE_APP_ENABLE_GZIP) return

  config.plugin('gzip').use(CompressionWebpackPlugin, [
    {
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/,
      threshold: 10 * 1024, // 超过10KB压缩
      minRatio: 0.8
    }
  ])
}

// 压缩图片
const imgGZip = config => {
  if (process.env.NODE_ENV !== 'production') return

  // 压缩图片
  config.module
    .rule('images')
    .use('image-webpack-loader')
    .loader('image-webpack-loader')
    .options({
      mozjpeg: { progressive: true, quality: 65 },
      optipng: { enabled: false },
      pngquant: { quality: [0.65, 0.9], speed: 4 },
      gifsicle: { interlaced: false }
      // webp: { quality: 75 }
    })
}

// 启用打包分析
const enableBundleAnalysis = config => {
  if (process.env.NODE_ENV !== 'production') return

  if (process.env.VUE_APP_BUNDLE_ANALYSIS) {
    config.plugin('bundle-analysis').use(BundleAnalyzerPlugin)
  }
}

const resolveAlias = config => {
  config.resolve.alias
    .set('@', resolve('src'))
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    proxy: {
      // 代理所有/api开头的请求
      '/api': {
        target: 'http://192.168.2.237:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          // 将最终url中匹配正则的部分替换成对应字符串
          // 下面是将最终url中开头的/api替换成''
          '^/api': '/'
        }
      }
    }
  },
  chainWebpack: config => {
    svgSprite(config)
    setCDN(config)
    dropConsole(config)
    enableGZip(config)
    imgGZip(config)
    enableBundleAnalysis(config)
    resolveAlias(config)
  },
  pluginOptions: {
    // vue-cli-plugin-style-resources-loader全局变量
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/sass/utils/_variablesCustom.scss'),
        path.resolve(__dirname, 'src/sass/utils/_function.scss'),
        path.resolve(__dirname, 'src/sass/utils/_mixins.scss'),
        path.resolve(__dirname, 'src/sass/utils/_mediaQuery.scss'),
        path.resolve(__dirname, 'src/sass/utils/_placeholders.scss'),
        path.resolve(__dirname, 'src/sass/_transition.scss.scss'),
        path.resolve(__dirname, 'src/sass/_layout.scss')
      ]
    }
  }
}
