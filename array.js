import * as data from './util/data'
let copy = (arr) => {
  let copyarr = []
  for (let i = 0; i < arr.length; i++) {
    copyarr.push(arr[i])
  }
}
let assign = (arr) => {
  let newarr = new Array(arr.length)
  for (let i = 0; i < arr.length; i++) {
    newarr[i] = arr[i]
  }
}
console.time('time')
copy(data.demo)
console.timeEnd('time')
console.time('time')
assign(data.demo)
console.timeEnd('time')