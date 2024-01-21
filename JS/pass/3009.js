const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n").map((line) => line.split(" ").map(Number));

console.log(input[0][0] ^ input[1][0] ^ input[2][0], input[0][1] ^ input[1][1] ^ input[2][1])
