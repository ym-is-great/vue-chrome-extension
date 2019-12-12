/**
 * After Emit Plugin
 * 
 * Remove redundant files.
 */

const fs = require('fs')

class AfterEmitPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap('AfterEmitPlugin', compilation => {
      fs.unlinkSync('dist/manifest.html')
    })
  }
}

module.exports = AfterEmitPlugin