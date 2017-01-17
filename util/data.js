let rand = (n) => {
  let data = []
  for (let i = 0; i < n; i++) {
    data.push(Math.random() * n)
  }
  return data
}

export let demo = rand(1000000)