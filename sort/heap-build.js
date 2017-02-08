import {swap} from '../util/util'
import * as data from '../util/data'
let arr = []
let start = 1
let check = (k) => {
  while(arr[k] > arr[Math.floor(k / 2)] && k /2 >= 1) {
    swap(arr, k, Math.floor(k / 2))
    k = Math.floor(k / 2)
  }
}
let heap = (item) => {
  arr[start] = item
  check(start)
  start++
}
let begin = (data) => {
  let len = data.length
  for (let i = 0; i < len; i++) {
    heap(data[i])
  }
  return arr
}
console.time('time')
console.log(begin([2, 3,5,9,1]))
console.timeEnd('time')