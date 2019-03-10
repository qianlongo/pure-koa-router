## pure-koa-router

> 一个将路由配置和控制器分离的koa中间件

[你可能会用到的一个路由适配器](https://github.com/qianlongo/blog/issues/27)


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

## routes配置 ([也可以参考例子](https://github.com/qianlongo/pure-koa-router/tree/master/example/routes))

```
// path 支持字符串  数组 正则
// methods 支持字符串  数组
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

## 更新记录

1.0.0  第一个版本

1.0.1 修改文档说明

1.0.2 支持方法为all的情况支持

1.0.3 添加获取文件异常处理

1.0.4 修复method为all时路由匹配有问题的bug

