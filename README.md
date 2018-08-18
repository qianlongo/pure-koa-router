## pure-koa-router
> 一个将koa的路由配置和控制器分离的中间件
## 路由配置设计

```
// 一切从router.register开始
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
