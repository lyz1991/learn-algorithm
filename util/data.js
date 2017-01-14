
let rand = (n) => {
  let data = []
  for (let i = 0; i < n; i++) {
    data.push(i)
  }
  return data
}

export let demo = rand(10000000)