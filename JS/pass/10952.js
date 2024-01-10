const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n").map((line) => line.split(" ").map(Number));

for (let i = 0; i < input.length; i++) {
  if (input[i][0] + input[i][1] === 0) {
    break
  }
  console.log(input[i][0] + input[i][1])
}