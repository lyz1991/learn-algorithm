import * as data from './util/data'
let findone = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target)
      return i
  }
}
console.time('time')
findone(data.demo, 999990)
console.timeEnd('time')

let findtwo = (arr, target, begin, end) => {
  let mid = begin + Math.floor((end - begin) / 2)
  if (arr[mid] == target) {
    console.log('在第' + mid)
    return
  }
  if (arr.length >= 1) {
    if (arr[mid] < target) {
      begin = mid + 1
      return findtwo(arr, target, begin, end)
    } else {
      end = mid
      return findtwo(arr, target,begin, end)
    }
  } else {
    console.log('no')
  }

}
console.time('time')
findtwo(data.demo, 999990, 0, data.demo.length)
console.timeEnd('time')
