import {swap} from '../util/util'
import * as data from '../util/data'
let select = (arr) => {
  for (var i = 0; i < arr.length;i++) {
    for (var j = i+1; j< arr.length;j++) {
      if (arr[j] < arr[i]) {
        swap(arr, j, i)
      }
    }
  }
}

console.time('time')
select(data.demo)
console.timeEnd('time')
/* 选择排序必须走到底无法提前终止，且从0开始，这是和插入排序本质区别*/