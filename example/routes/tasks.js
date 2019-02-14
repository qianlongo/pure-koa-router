module.exports = [
  // 渲染首页html
  {
    path: '/',
    methods: 'all',
    controller: 'tasks.list'
  },
  // 添加任务
  {
    path: '/tasks/add',
    methods: 'post',
    controller: 'tasks.add'
  },
  {
    path: '/tasks/del',
    methods: 'post',
    controller: 'tasks.del'
  },
  // 切换状态
  {
    path: '/tasks/back',
    methods: 'post',
    controller: 'tasks.back'
  }
]
