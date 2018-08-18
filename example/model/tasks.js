let doing = []
let finished = []
let id = -1
const selectId = function (arr, id) {
  let index = -1

  arr.forEach(function (item, i) {
    if (id === item.id) {
      index = i
    }
  })

  return index
}

module.exports = {
  list () {
    return { doing, finished }
  },
  add (info) {
    let item = { info }

    item.time = new Date().toLocaleString()
    item.id = ++id

    console.log('添加任务')
    console.log(item)

    doing.unshift(item)
  },
  del (id) {
    let index = selectId(doing, id)
    console.log(typeof id)
    index !== -1 && finished.unshift(doing.splice(index, 1)[0])
  },
  back (id) {
    let index = selectId(finished, id)

    index !== -1 && doing.push(finished.splice(index, 1)[0])
  }
}
