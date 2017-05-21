var path = require('path');

module.exports = {
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}