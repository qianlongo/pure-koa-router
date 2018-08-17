## pure-koa-router
> 一个将koa的路由配置和控制器分离的中间件
## 路由配置设计

```
// 一切从router.register开始
// path
// methods
// middleware

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
  controller: [ 'test.index', 'test.index2' ]
}
// 如果方法对应的method不一样可以这样配置
{
  path: '/test',
  controllers: [
    {
      methods: 'get',
      controller: 'test.index'
    },
    {
      methods: 'post',
      controller: 'test.index2'
    }
  ]
}
// 支持多个path指向同一个controller
{
  path: [ '/test', '/test2' ],
  controller: 'test.index'
}
```
