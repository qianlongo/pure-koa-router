module.exports = {
  async a (ctx, next) {
    ctx.body = 'hello a'

    await next()
  },
  async b (ctx) {
    ctx.body += ' hello b'
  },
  async c (ctx) {
    ctx.body = Math.random()
  }
}
