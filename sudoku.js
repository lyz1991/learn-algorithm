let sudoku = (num) => {
  if (num % 2 != 1 ) {
    console.warn('必须是奇数')
    return
  }
  let arr = new Array(num * num + 1)
  let start = 2 // 开始数字
  return fill(num, arr, start)

}
let fill = (num, arr, start) => {
  let begin = ((num / 2) | 0) + 1 // 开始位
  arr[begin] = 1
  let idx
  while (start <= num * num) {
    if (begin + 1 - num <= 0) {
        idx = (num - 1) * num + begin + 1
    } else if ((begin + 1 - num) % num == 1 ) {
      let col = Math.floor(begin  / num)
      if (col == 1) {
        idx = begin + num
      } else {
        let col = Math.floor((begin + 1 - num) / num)
        idx = (col - 1) * num + 1
      }
    } else if (arr[begin + 1 - num]) {
      idx = begin + num
    } else {
      idx = begin + 1 - num
    }
    arr[idx] = start
    begin = idx
    start++
  }
  return arr.slice(1)
}
let mysudoku = (num) => {
  let result = sudoku(num)
   for (let i = 0; i < result.length; i++) {
     console.log(result[i])
   }
}
mysudoku(3)