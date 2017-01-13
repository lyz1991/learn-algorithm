import {swap} from './util/util'
import * as data from './util/data'
let insert = (arr) => {
 for (var i = 1; i < arr.length; i++) {
   for (var j = i; j > 0; j--) {
     if (arr[j] > arr[j - 1]) {
       break
     } else {
       swap(arr, j, j - 1)
     }
   }
 }
 return arr
}
console.log(insert(data.demo))