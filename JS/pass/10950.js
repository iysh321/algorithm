const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

for (let idx = 1; idx <= input[0][0]; idx++) {
  console.log(input[idx][0] + input[idx][1]);
}
