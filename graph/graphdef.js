/*求联通分量&&路径*/
import {list} from '../data/graphlist'
class count {
  constructor (list, j = 0, w) { // j起始点，w结束点
    this.list = list
    this.j = j
    this.w = w
    this.len = list.length
    this.visit = new Array(list.len)
    this.from = new Array(this.len)
    this.order = new Array(this.len)
    this.num = 0
    for (let i = 0; i < this.len; i++) {
      this.visit[i] = false
      this.from[i] = -1
      this.order[i] = -1
    }
  }
  countnum () {
    for (let i = 0; i < this.len; i++) {
      if (!this.visit[i]) {
        this.dfs(i)
        this.num++
      }
    }
  }
  dfs (i) {
    this.visit[i] = true
    for (let j = 0; j < this.list[i].length; j++) {
      if (!this.visit[this.list[i][j]]) {
        this.from[this.list[i][j]] = i
        this.dfs(this.list[i][j])
      }
    }
    return this
  }
  findpath () {
    return this.dfs(this.j).showpath(this.w, false)

  }
  showpath (w = this.w, type = true) {
    let path = w, arr =[], tpl = ''
    while (path != -1) {
      arr.push(path)
      path = this.from[path]
    }
    for (let i = arr.length - 1; i >= 0; i--) {
      tpl += arr[i] + ' '
    }
    return type ? `最短路线：${tpl},最短距离：${this.order[w]}` : `普通路线：${tpl}，距离：${arr.length - 1}`
  }
  bfs () {
    let q = [], path = []
    q.push(this.j)
    this.visit[this.j] = true
    this.order[this.j] = 0
    let tpl = ''
    while (q.length) {
      let j = q[0] //当前队列首
      tpl += j + ''
      q.shift()
      for (let i = 0; i < this.list[j].length; i++) {
        let vec = this.list[j][i] // 待访问点
        if (!this.visit[vec]) {
          q.push(vec)
          this.visit[vec] = true
          this.from[vec] = j
          this.order[vec] = this.order[j] + 1
          if (vec == this.w) {
            return this.showpath(vec)

          }
        }
      }
    }
  }

  shownum () {
    return this.num
  }
}
console.log(new count(list, 0, 7).findpath())
console.log(new count(list, 0, 7).bfs())