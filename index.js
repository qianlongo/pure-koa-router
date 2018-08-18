const nodePath = require('path')
const KoaRouter = require('koa-router')
const koaCompose = require('koa-compose')
const assert = (condition, msg) => {
  if (!condition) throw new Error(msg)
}

module.exports = ({ routes = [], controllerDir = '', routerOptions = {} }) => {
  assert(Array.isArray(routes), 'routes must be an Array')
  assert(controllerDir, 'controllerDir is required')

  let router = new KoaRouter(routerOptions)
  let middleware

  routes.forEach((routeConfig = {}) => {
    let { path, methods = [ 'get' ], controller } = routeConfig

    methods = (Array.isArray(methods) && methods) || [ methods ]
    controller = (Array.isArray(controller) && controller) || [ controller ]

    middleware = controller.map((controller) => {
      let controllerPath = controller.split('.')
      let controllerMethod = controllerPath.pop()

      controllerPath = nodePath.join(controllerDir, controllerPath.join('/'))

      try {
        controllerMethod = require(controllerPath)[ controllerMethod ]
      } catch (error) {
        console.log(`${controllerPath} has no ${controllerMethod} method`)
        throw error
      }

      return controllerMethod
    })

    router.register(path, methods, middleware)
  })

  return koaCompose([ router.routes(), router.allowedMethods() ])
}
