const tasks = require('./tasks')
const testPure = require('./testPure')

module.exports = [
  ...tasks,
  ...testPure
]
