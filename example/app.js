const Koa = require('koa')
const app = new Koa()
const middleware = require('./middleware')
const PORT = 3000

middleware(app)

app.listen(PORT, () => {
  console.log(`app start at ${PORT}`)
})
