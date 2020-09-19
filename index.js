const _ = require("underscore")

const numArr = [124, 52, 98, 1004, 97, 8635, 2]

const strObj = [
  { suffix: "Mr", name: "Rogers" },
  { suffix: "none", name: "Barney" },
  { suffix: "Count", name: "Dracula" },
  { suffix: "Commander", name: "Sheppard" },
]

const nameArr = _.pluck(strObj, "name")

console.log(nameArr)
