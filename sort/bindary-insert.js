import * as data from '../util/data'
let insert = (arr, target, begin, end) => {
  let mid =  begin + Math.floor((end - begin) / 2)
  let len = arr.length
  if (begin >= end) {
    if (arr[begin] > target) {
      arr = [target].concat(arr)
    } else {
      arr = arr.concat(target)
    }
    return arr
  }
  if (arr[mid] <= target && arr[mid + 1] >= target) {
    arr = arr.slice(0, mid).concat(target).concat(arr.slice(mid+1))
    /* for (let i = len; i > mid; i--) {
      arr[i] = arr[i-1]
    }
    arr[mid+1] = target */
    return arr
  }
  else if (arr[mid] < target) {
    return insert(arr, target, mid + 1,end)
  } else {
    return insert(arr, target, begin, mid - 1)
  }
}
console.time('time')
console.log(insert(data.data, 2.4, 0, data.data.length))
console.timeEnd('time')