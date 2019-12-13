/**
 * After Emit Plugin
 * 
 * Remove redundant files.
 */

const fs = require('fs')

class AfterEmitPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap('AfterEmitPlugin', compilation => {
      const outputPath = 'dist/manifest.html'
      if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath)
    })
  }
}

module.exports = AfterEmitPlugin