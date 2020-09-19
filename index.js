const _ = require("underscore")

const numArr = [
  [56, 72, 12],
  [10, 97, 86],
]

const strObj = [
  { suffix: "Mr", name: "Rogers" },
  { suffix: "none", name: "Barney" },
  { suffix: "Count", name: "Dracula" },
  { suffix: "Commander", name: "Sheppard" },
]

const sortedArr = _.invoke(numArr, "sort") // Returns given list with whatever modifications applied to it, like: "sort", "join", "toUpperCase". This method does change the original data.

const nameArr = _.pluck(strObj, "name") // Returns an array of specified key/value pair from an object. This method does not change the original data.

console.log(`Underscore Data:`, sortedArr)
console.log(`Original Data:`, numArr)
console.log(
  `*****************************************************************************************`
)
console.log(`Underscore Data:`, nameArr)
console.log(`Original Data:`, strObj)
