let maxmin = (arr) => {
  let len = arr.length
  let $min = arr[0], $max = len & 1 ? arr[0] : arr[1]
  let begin = len & 1 ? 1 : 2
  for (let j = begin; j < len; j += 2) {
    if (arr[j] < arr[j + 1]) {
      $min = $min <= arr[j] ? $min : arr[j]
      $max = $max >= arr[j + 1] ? $max : arr[j + 1]
    } else {
      $min = $min <= arr[j + 1] ? $min : arr[j + 1]
      $max = $max >= arr[j] ? $max : arr[j]
    }
  }
  return [$min, $max]
}
console.log(maxmin([1,2,3,2,7,4,11,8,9]))