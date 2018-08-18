module.exports = [
  // 渲染首页html
  {
    path: '/',
    controller: 'tasks.home'
  },
  // 添加任务
  {
    path: '/tasks/add',
    methods: 'post',
    controller: 'tasks.add'
  },
  {
    path: '/tasks/add',
    methods: 'post',
    controller: 'tasks.add'
  },
  // 清除任务
  {
    path: '/tasks/clear',
    methods: 'post',
    controller: 'tasks.clear'
  },
  // 完成的任务
  {
    path: '/tasks/complete',
    methods: 'post',
    controller: 'tasks.complete'
  }
]
