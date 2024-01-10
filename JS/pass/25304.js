const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let result = 0;
for (let idx = 2; idx <= input[1][0] + 1; idx++) {
  result += input[idx][0] * input[idx][1];
}
console.log(result === input[0][0] ? "Yes" : "No");
