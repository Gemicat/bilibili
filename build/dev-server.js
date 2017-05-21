require('./check-version')();
var config = require('../config');
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
var webpack = require('webpack');
var express = require('express');
var proxyMiddleware = require('http-proxy-middleware')
var opn = require('opn'); // 自动打开浏览器

var webpackConfig = process.env.NODE_ENV = require('./webpack.dev.conf');

var path = require('path');

// 获取端口号
var port = process.env.PORT || config.dev.port;
var proxyTable = config.dev.proxyTable;

var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

var app = express();

app.use(devMiddleware);

app.use(hotMiddleware);

var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);

app.use(staticPath, express.static('./static'));

var uri = 'http://localhost:' + port;

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return;
  }

  // when env is testing, don't need open it
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})

