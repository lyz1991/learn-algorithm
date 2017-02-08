import * as data from '../util/data'
import {swap} from '../util/util'
let findIndex = (arr, l, r) => {
  let idx = Math.floor(Math.random() * (r - l + 1)) + l
  swap(arr, l, idx)
  let j =r, i = l + 1
  let begin = arr[l] // 等待移动的指针
  // [l+1, i), (j, r]
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
let insert = (arr, l, end) => {
  for (let i = l + 1; i <= end; i++) {
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