const manifest = {
  name: 'Vue Project',
  version: '0.1.0',
  manifest_version: 2,
  v: 13
}

if (process.env.NODE_ENV !== 'production') {
  manifest.content_security_policy = `content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'`
}

module.exports = manifest
