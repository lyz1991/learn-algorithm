import {swap} from './util/util'
import * as data from './util/data'
let insert = (arr) => {
 for (let i = 1; i < arr.length; i++) {
   let e = arr[i]
   let j
   for (j = i; j > 0 && e < arr[j - 1]; j--) {
       arr[j] = arr[j - 1]
     }
     arr[j] = e
   }
}
console.time('time')
insert(data.demo)
console.timeEnd('time')