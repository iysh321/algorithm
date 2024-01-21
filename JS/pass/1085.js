const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ").map(Number)


  const array = [input[0], input[2]- input[0], input[1], input[3]-input[1]]
  console.log(Math.min(...array))
