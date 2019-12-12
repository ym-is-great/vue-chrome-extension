/**
 * Manifest Loader
 * 
 * Modify and output manifest.json. DevServer relies on lax content security policy.
 */

module.exports = function(source) {
  const manifest = JSON.parse(source)
  if (process.env.NODE_ENV !== 'production') {
    manifest.content_security_policy = `content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'`
  }
  this.emitFile('manifest.json', JSON.stringify(manifest, null, 2))
  return source
}
