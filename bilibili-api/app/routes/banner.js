import Router from 'koa-router';
import axios from 'axios';
import {banner} from './urlConfig.js';

const router = Router();

router.get('/banner', async (ctx, next) => {
  let res = await axios.get(banner);
  ctx.body = res.data;
});

export default router;