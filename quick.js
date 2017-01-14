import * as data from './util/data'
import {swap} from './util/util'
let findIndex = (arr, l, r) => {
  let mid = (r / 2) | 0
  let begin = arr[mid]
  let j = l // 快速指针
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < begin) {
      swap(arr, ++j, i)
    }
  }
  swap(arr, l, j)
  console.log(j)
  console.log('22')
  return j
}
let _quick = (arr, l, len) => {
  if (l >= len) {
    return
  }
  let p = findIndex(arr, l, len)
  _quick(arr, l, p - 1)
  _quick(arr, p + 1, len)
}
let quick = (arr) => {
  let len = arr.length
  _quick(arr, 0, len - 1)
  console.log(arr)
  return arr
}
console.time('time')
quick(data.demo)
console.timeEnd('time')