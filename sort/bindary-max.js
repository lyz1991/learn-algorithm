let findmin = (arr) => {
  let i = 0, len = arr.length
  while (2 * i + 1 < len) {
    i = 2 * i + 1
  }
  return arr[i]
}
let findmax = (arr) => {
  let i = 0, len = arr.length
  while (2 * i + 2 < len) {
    i = 2 * i + 2
  }
  return arr[i]
}
let build = (arr) => {
  let copy = []

  for (let i = 0; i < arr.length; i++) {

  }
}
console.log(findmin([9,7,16,2,3,18,21]))
console.log(findmax([9,7,16,2,3,18,21]))