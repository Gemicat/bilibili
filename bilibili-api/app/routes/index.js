import Router from 'koa-router';
import banner from './banner'

const router = new Router();

router.use(banner.routes(), banner.allowedMethods());

export default router;