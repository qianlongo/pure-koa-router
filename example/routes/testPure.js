module.exports = [
  // 最基础的配置
  {
    path: '/test/a',
    controller: 'test.index.a'
  },
  // 多路由对一个控制器
  {
    path: [ '/test/b', '/test/c' ],
    controller: 'test.index.a'
  },
  // 多路由对多控制器
  {
    path: [ '/test/d', '/test/e' ],
    controller: [ 'test.index.a', 'test.index.b' ]
  },
  // 单路由对对控制器
  {
    path: '/test/f',
    controller: [ 'test.index.a', 'test.index.b' ]
  },
  // 正则
  {
    path: /\/test\/\d/,
    controller: 'test.index.c'
  }
]
