import {swap} from './util/util'
import * as data from './util/data'
let insert = (arr) => {
 for (let i = 1; i < arr.length; i++) {
   let e = arr[i] // 当前待排的这个数
   let j
   /*插入到已经排好序列中*/
   for (j = i; j > 0 && e < arr[j - 1]; j--) {
       arr[j] = arr[j - 1] // 如果小就向后移一列，找到对应的j的位置
     }
     arr[j] = e
   }
   return arr
}
let instertwo = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let b = arr[i], j = i
    while (j > 0 && b < arr[j - 1]) {
      arr[j] = arr[--j]
    }
    arr[j] = b
  }
  return arr
}
console.time('time')
// insert(data.demo)
console.timeEnd('time')
console.log(instertwo([2,4,6,8,1,3,2,7]))