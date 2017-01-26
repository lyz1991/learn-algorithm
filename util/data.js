let rand = (n) => {
  let data = []
  for (let i = 0; i < n; i++) {
    data.push(Math.floor(Math.random() * n))
  }
  return data
}
let sort = (n) => {
  let data = []
  for (let i = 0; i < n; i++) {
    data.push(i)
  }
  return data
}
export let demo = rand(1000000)
export let data = sort(100000)