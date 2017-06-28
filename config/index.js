var path = require('path');

module.exports = {
  dev: {
    env: require('./dev.env'),
    port: 9528,
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}