import * as data from './util/data'
let count = (arr) => {
  let len = arr.length
  let copy = [], bull = []
  for (let i = 0; i < len; i++) {
    copy[arr[i]] = copy[arr[i]] ? copy[arr[i]] + 1 : 1
  }
  for (let j = 0; j < copy.length; j++) {
    if (copy[j] != undefined) {
      while (copy[j]) {
        bull.push(j)
        copy[j]--
      }
    }
  }
  copy = null
  return bull
}

console.time('time')
count(data.demo)
console.timeEnd('time')