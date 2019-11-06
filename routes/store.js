const router = require('koa-router')()

router.post('/allProduct/gets', async (ctx,next) => {
  let params = ctx.request.body
  let data = require('./../mockData/productsList')
  ctx.body = {
    total: data.length,
    list: data.splice((params.current*1-1)*params.pageSize*1,params.pageSize*1),
    status: 'success'
  }
})

router.get('/product/ipbanner', async (ctx,next) => {
  console.log(ctx)
  ctx.body = 'bannerlist'
})

module.exports = router