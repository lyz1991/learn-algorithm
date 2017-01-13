var demo = [1,3,9,2,4,10]
function test(arr) {
  for (var i = 0; i < arr.length;i++) {
    for (var j = i+1; j< arr.length;j++) {
      if (arr[j] < arr[i]) {
        swap(arr, j, i)
      }
    }
  }
  return arr
}
function swap(arr, a, b) {
  arr[a] = arr[a] ^ arr[b]
  arr[b] = arr[a] ^ arr[b]
  arr[a] = arr[a] ^ arr[b]
}
console.log(test(demo))
/* 选择排序必须走到底无法提前终止，且从0开始，这是和插入排序本质区别*/