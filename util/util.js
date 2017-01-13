export let swap = (arr, a, b) => {
  arr[a] = arr[a] ^ arr[b]
  arr[b] = arr[a] ^ arr[b]
  arr[a] = arr[a] ^ arr[b]
}