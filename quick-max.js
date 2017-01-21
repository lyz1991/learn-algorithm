import * as data from './util/data'
import {swap} from './util/util'
let n = 9
let findIndex = (arr, l, r) => {
  let idx = Math.floor(Math.random() * (r - l + 1)) + l
  swap(arr, l, idx)
  let begin = arr[l], i = l + 1, j = r
  while (true) {
    while (i <= r && arr[i] < begin) {
      i++
    }
    while (j >= l + 1 && arr[j] > begin) {
      j--
    }
    if (i > j) {
      break
    }
    swap(arr, i++, j--)
  }
  swap(arr, l, j)
  return j
}
let _quick = (arr, l, r) => {
  if (l >= r) {
    return arr[l]
  }
  let idx = findIndex(arr, l ,r)
  if (idx == n) {
    return arr[idx]
  } else if (idx > n) {
    return _quick(arr, l, idx - 1)
  } else {
    return _quick(arr, idx + 1, r)
  }


}
let quick = (arr) => {
  let len = arr.length
  return _quick(arr, 0, len - 1)

}
console.log(data.demo)
console.log(quick(data.demo))
