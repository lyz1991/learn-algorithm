/*邻接表*/
const assert = require('assert')
class graph {
  constructor (n, m, directed) {
    this.n = n
    this.m = 0
    this.directed = directed
    this.vectors = []
    for (let i = 0; i < n; i++) {
      this.vectors.push([])
    }
  }
  showV () {
    return this.n
  }
  showE () {
    return this.m
  }
  addEdge (v, w) {
    assert(v >= 0 && v < n)
    assert(w >= 0 && w < n)
    if (this.hasEdge(v, w)) {
      return
    }
    this.vectors[v].push(w)
    if (v != w && !this.directed) {
      this.vectors[v].push(w)
    }
    this.m++

  }
  hasEdge (v, w) {
    assert(v >= 0 && v < n)
    assert(w >= 0 && w < n)
    return this.vectors[v].indexOf(w) != -1
  }
}
new graph(3,2, true)
