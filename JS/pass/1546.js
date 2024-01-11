//https://www.acmicpc.net/problem/1546

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const max = Math.max(...input[1]);
let sum = 0;

for (let i = 0; i < input[0]; i++) {
  sum += (input[1][i] / max) * 100;
}

console.log(sum / input[0]);
