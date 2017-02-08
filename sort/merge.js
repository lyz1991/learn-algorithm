import * as data from '../util/data'
let merge = (l, r) => {
   let arr = []
   let li  = 0, ri = 0
   while (li < l.length && ri < r.length) {
     if (l[li] < r[ri]) {
       arr.push(l[li++])
     } else {
       arr.push(r[ri++])
     }
   }
  return arr.concat(l.slice(li)).concat(r.slice(ri))
}
let mergesort = (arr) => {
    if (arr.length <= 1) {
      return arr
    }
    let middle = arr.length / 2 | 0 ,
    left    = arr.slice(0, middle),
    right   = arr.slice(middle);
    return merge(mergesort(left), mergesort(right))
}
console.time('time')
mergesort(data.demo)
console.timeEnd('time')