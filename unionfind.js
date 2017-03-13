class data {
  constructor (count) {
     this.p = new Array(count)
     this.rank = new Array(count)
     for (let i = 0; i < count; i++) {
       this.p[i] = i
       this.rank[i] = 1
     }
  }
  find (target) {
    while (target != this.p[target]) {
      this.p[target] = this.p[this.p[target]]
      target = this.p[target]
    }
    return target
  }
  isconnect (one, two) {
    return this.find(one) === this.find(two)
  }
  union (one, two) {
    let Pone = this.find(one), Ptwo = this.find(two)
    if (Pone === Ptwo) {
      return
    }
    if (this.rank[Pone] < this.rank[Ptwo]) {
      this.p[Pone] = this.p[Ptwo]
    } else if (this.rank[Pone] > this.rank[Ptwo]) {
      this.p[Ptwo] = this.p[Pone]
    } else {
      this.p[Ptwo] = this.p[Pone]
      this.rank[Pone] += 1
    }

    return this.p
  }
}
let mydata = new data(7)
mydata.union(1,3)
mydata.union(2,7)
mydata.union(4,7)
mydata.union(5,1)
console.log(mydata.find(3))