## pure-koa-router

> 一个将路由配置和控制器分离的koa中间件

## 使用

> npm i pure-koa-router -S

``` javascript
const Koa = require('koa')
const pureKoaRouter = require('pure-koa-router')
const path = require('path')

const app = new Koa()

// const routes = require('../routes') 传文件内容，数组
// const routes = path.join(__dirname, '../routes') 传文件目录
// const routes = path.join(__dirname, '../routes/tasks.js') 传文件名称

const controllerDir = path.join(__dirname, '../controller') // 指定控制器的根目录
const routerOptions = { // new KoaRouter() 时候传入的参数 具体点击https://github.com/alexmingoia/koa-router
  prefix: '/users'
}

app.use(pureKoaRouter({
  routes,
  controllerDir,
  routerOptions
}))


```

## routes配置

```
// path 支持字符串  数据 正则
// methods 支持字符串  数据
// middleware 支持字符串  数组

// 1 最基础的配置
{
  path: '/test',
  methods: 'post',
  controller: 'test.index'
}

// 2 对同一个path支持多个controller处理
{
  path: '/test',
  methods: 'post',
  controller: [ 'test.index', 'apply.test.index2' ]
}

// 支持多个path指向同一个controller
{
  path: [ '/test', '/test2' ],
  controller: 'test.index'
}
```
