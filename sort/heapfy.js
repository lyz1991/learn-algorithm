import {swap} from '../util/util'
import * as data from '../util/data'
let shiftdown = (arr, len, k) => {
  while(2 * k + 1 < len) {
    let j = 2 * k + 1
    if (j + 1 < len && arr[j + 1] > arr[j]) {
      j = j + 1
    }
    if (arr[k] > arr[j]) {
      break
    } else {
      swap(arr, j, k)
    }
    k = j
  }
}
let heapfy = (arr) => {
  let len = arr.length
  let count = Math.floor((len - 1) / 2)
  for (let k = count; k >= 0; k--) {
    shiftdown(arr, len, k)
  }
  for (let j = len - 1; j > 0; j--) {
    swap(arr, 0, j)
    shiftdown(arr, j, 0)
  }
  return arr
}
console.time('time')
heapfy(data.demo)
console.timeEnd('time')