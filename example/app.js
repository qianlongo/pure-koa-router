const Koa = require('koa')
const path = require('path')
const pureKoaRouter = require('../index')

const app = new Koa()
const routes = require('./routes')
const controllerDir = path.resolve(__dirname, './controller')
const PORT = 3000

app.use(pureKoaRouter({
  routes,
  controllerDir
}))

app.listen(PORT, () => {
  console.log(`app start at ${PORT}`)
})
