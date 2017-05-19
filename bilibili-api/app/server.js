// 后台

import Koa from 'koa'; // 引入koa
import http from 'http'; // 引入 http
import convert from 'koa-convert';
import cors from 'koa-cors'; // 解决跨域问题
import bodyParser from 'koa-bodyparser'; //处理 post 请求体数据
import resource from 'koa-static'; // 静态资源托管
import logger from 'koa-logger'; // 打印日志

import path from 'path';

import config from '../config/config';

const app = new Koa();

app.use(convert(cors()));

app.use(convert(logger()));

app.use(bodyParser());

app.use(resource(path.join(__dirname, '../public')));

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})

app.on('error', (error, ctx) => {
  console.log('2333！出错啦' + JSON.stringify(ctx.onerror));
  console.log('error: ' + error);
})

http.createServer(app.callback()).listen(config.port).on('listening', function() {
  console.log('正在监听端口' + config.port);
});

export default app;