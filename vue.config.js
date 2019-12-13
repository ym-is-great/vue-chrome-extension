const path = require('path')
const AfterEmitPlugin = require('./src/webpack-utils/after-emit-plugin')

module.exports = {
  devServer: {
    writeToDisk: true
  },
  pages: {
    manifest: 'src/manifest.json',
    background: {
      entry: 'src/background.js',
      template: 'public/templates/background.html'
    },
    popup: {
      entry: 'src/popup.js',
      template: 'public/templates/popup.html'
    }
  },
  chainWebpack: config => {
    config.resolveLoader.modules
      .add(path.resolve(__dirname, 'src/webpack-utils'))
    config.module
      .rule('manifest')
      .test(/manifest\.json/)
      .use('manifest-loader')
        .loader('manifest-loader')
        .end()
    config
      .plugin()
      .use(AfterEmitPlugin)
  }
}