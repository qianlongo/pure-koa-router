const tasks = require('../model/tasks')

module.exports = {
  async list (ctx) {
    await ctx.render('index', tasks.list())
  },
  async add (ctx) {
    tasks.add(ctx.request.body.info)

    ctx.redirect('/')
  },
  async del (ctx) {
    tasks.del(Number(ctx.request.body.id))

    ctx.redirect('/')
  },
  async back (ctx) {
    tasks.back(Number(ctx.request.body.id))

    ctx.redirect('/')
  }
}
