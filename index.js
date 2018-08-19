const nodePath = require('path')
const fs = require('fs')
const KoaRouter = require('koa-router')
const koaCompose = require('koa-compose')
const assert = (condition, msg) => {
  if (!condition) throw new Error(msg)
}

module.exports = ({ routes = [], controllerDir = '', routerOptions = {} }) => {
  assert(Array.isArray(routes) || typeof routes === 'string', 'routes must be an Array or a String')
  assert(fs.existsSync(controllerDir), 'controllerDir must be a file directory')

  if (typeof routes === 'string') {
    if (fs.existsSync(`${routes}.js`) || fs.existsSync(routes)) {
      if (fs.existsSync(`${routes}.js`)) {
        routes = require(routes)
      } else if (fs.existsSync(routes)) {
        routes = fs.readdirSync(routes).reduce((result, fileName) => {
          return result.concat(require(nodePath.join(routes, fileName)))
        }, [])
      }
    } else {
      throw new Error('routes is not a file or a directory')
    }
  }

  let router = new KoaRouter(routerOptions)
  let middleware

  routes.forEach((routeConfig = {}) => {
    let { path, methods = [ 'get' ], controller } = routeConfig

    methods = (Array.isArray(methods) && methods) || [ methods ]
    controller = (Array.isArray(controller) && controller) || [ controller ]

    middleware = controller.map((controller) => {
      let controllerPath = controller.split('.')
      let controllerMethod = controllerPath.pop()

      try {
        controllerMethod = require(nodePath.join(controllerDir, controllerPath.join('/')))[ controllerMethod ]
      } catch (error) {
        throw error
      }

      assert(typeof controllerMethod === 'function', 'koa middleware must be a function')

      return controllerMethod
    })

    router.register(path, methods, middleware)
  })

  return koaCompose([ router.routes(), router.allowedMethods() ])
}
