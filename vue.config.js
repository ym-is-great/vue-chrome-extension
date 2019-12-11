const fs = require('fs')
const path = require('path')

class ManifestPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('ManifestPlugin', compilation => {
      const manifest = require('./src/manifest')
      const outputDirPath = compiler.options.output.path
      if (!fs.existsSync(outputDirPath)) fs.mkdirSync(outputDirPath)
      const outputPath = path.join(compiler.options.output.path, '/manifest.json')
      fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2))
    })
  }
}

module.exports = {
  devServer: {
    writeToDisk: true,
    before(){
      console.log('before ---------------')
    }
  },
  pages: {
    manifest: 'src/manifest.js',
    background: 'src/background.js',
    popup: 'src/popup.js'
  },
  chainWebpack: config => {
    config
      .plugin('manifest')
      .use(ManifestPlugin)
  }
}