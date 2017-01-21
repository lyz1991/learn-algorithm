import * as data from './util/data'
import {swap} from './util/util'
let findIndex = (arr, l, r) => {
  console.log(r)
  let idx = Math.floor(Math.random() * (r - l + 1) + l)
  console.log(idx)
  swap(arr, l, idx)
  console.log(arr)
  let begin = arr[l] // 等待移动的指针
  let j = l // 快速指针
  //[l - p-1] < arr[p], [p, i) > arr[p]
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < begin) {
      swap(arr, ++j, i)
    }
  }
  swap(arr, l, j)
  console.log('zhi' + j)
  return j
}
let insert = (arr, end) => {
  for (let i = 1; i <= end; i++) {
    let e = arr[i]
    let j
    for (j = i; j > 0 && e < arr[j - 1]; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = e
  }
  return arr
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
  return arr
}
console.time('time')
quick(data.demo)
console.timeEnd('time')