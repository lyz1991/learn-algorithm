/* 连通分量 */
const fs = require('fs')
class intergretar {
  constructor (g, v) {
    this.v = v
    this.g = g
    this.index = 0
  }
  begin () {
    return this.g[this.v][0]
  }
  next () {
    this.index++
    if (this.index > this.p.length) {
      return -1
    }
    return this.g[this.v][this.index]
  }
  end () {
    
  }
}

