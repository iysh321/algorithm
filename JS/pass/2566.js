//https://www.acmicpc.net/problem/2566

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let max = 0;
let idx = [];

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (input[i][j] >= max) {
      max = input[i][j];
      idx = [i + 1, j + 1];
    }
  }
}
console.log(max);
console.log(idx.join(" "));
