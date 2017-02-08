const assert = require('assert')
class graph {
  constructor (n, directed) {
    this.n = n
    this.m = 0
    this.directed = directed
    this.vectors = []
    for (let i = 0; i < n; i++) {
      let arr = []
      for (let j = 0; j < n; j++) {
        arr.push(0)
      }
      this.vectors.push(arr)
    }
  }
  showV () {
    return this.n
  }
  showE () {
    return this.m
  }
  addEdge (v, w) {
    assert(v >= 0 && v < this.n)
    assert(w >= 0 && w < this.n)
    if (this.hasEdge(v, w)) {
      return this
    }
    this.vectors[v][w] = 1
    if (!this.directed) {
      this.vectors[w][v] = 1
    }
    this.m++
    return this
  }
  hasEdge (v, w) {
    assert(v >= 0 && v < this.n)
    assert(w >= 0 && w < this.n)
    return this.vectors[v][w]
  }
  showVectorone () {
    for (let i = 0; i < this.vectors.length; i++) {
      let tpl = `${i}:`
      for (let j = 0; j < this.n; j++) {
        if (this.vectors[i][j]) {
          tpl += j + ' '
        }
      }
      console.log(tpl)
    }
  }
  showVectortwo (){
    for (let i = 0; i < this.vectors.length; i++) {
      for (let j = 0; j < this.n; j++) {
        console.log(this.vectors[i][j])
      }
    }
  }
 }
 const mygraph = new graph(3, true)
 mygraph.addEdge(0, 1).addEdge(0,2).addEdge(1, 2)
mygraph.showVectortwo()
