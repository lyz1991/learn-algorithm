import {weight} from '../data/graphlist'
const assert = require('assert')
class Edge {
  constructor (x, y, w) {
    this.x = x
    this.y = y
    this.w = w
  }
  other (a) {
    assert(a == this.x || a == this.y)
    return a == this.x ? this.y : a
  }
}
class prim {
  constructor (list) {
    this.marked = []
    this.edge = []
    this.mst = []
    this.list = list
    for (let i = 0; i < this.list.length; i++) {
      this.marked[i] = false
    }
  }
  visit (x) {
    if (this.mst.length == this.list.length - 1) {
      return this.mst
    }
    this.marked[x] = true
    for (let i = 0; i < this.list[x].length; i++) {
      if (!this.marked[this.list[x][i]]) {
        this.edge.push(new Edge(x, this.list[x][i].to, this.list[x][i].weight))
      }
    }
    this.edge.sort((a, b) => {
      return a.w - b.w
    })
    while (this.marked[this.edge[0].y]) {
      this.edge.shift()
    }
    let min = this.edge[0]
    this.mst.push(min)
    this.edge.shift()
    return this.visit(min.y)
  }
}
console.log(new prim(weight).visit(0))