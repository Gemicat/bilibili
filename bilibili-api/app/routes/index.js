import Router from 'koa-router';
import banner from './banner';
import rank from './rank';

const router = new Router();

router.use(banner.routes(), banner.allowedMethods());
router.use(rank.routes(), rank.allowedMethods());

export default router;