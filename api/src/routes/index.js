import Router from 'koa-router';

const router = new Router();

router.get('/', (ctx) => {
  ctx.status = 200;
  ctx.body = "GovStock is available";
});

export default router;