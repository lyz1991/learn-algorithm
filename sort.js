import * as data from './util/data'

console.time('time')
data.demo.sort((a,b) => {return a-b})[2233]
console.timeEnd('time')