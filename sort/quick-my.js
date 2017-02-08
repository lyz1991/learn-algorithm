import * as data from '../util/data'
import {swap} from '../util/util'
let findIndex = (arr, l, len) => {
  let idx = Math.floor(Math.random() * (len -l) + l)
  swap(arr, l, idx)
  let par = arr[l], j = l
  for (let i = l + 1; i <= len; i++) {
    if (arr[i] < par) {
      swap(arr, ++j, i)
    }
  }
  swap(arr, j, l)
  return j
}
let _quick = (arr, l, len) => {
  if (l >= len) {
    return
  }
  let p = findIndex(arr, l, len)
  _quick(arr, l, p)
  _quick(arr, p + 1, len)
}
let quick = (arr) => {
  let len = arr.length
  _quick(arr, 0, len - 1)
  return arr
}
console.log(quick(data.demo))