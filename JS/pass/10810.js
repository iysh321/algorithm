const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let basket = new Array(input[0][0] + 1).fill(0);

for (let i = 1; i <= input[0][1]; i++) {
  for (let j = input[i][0]; j <= input[i][1]; j++) {
    basket[j] = input[i][2];
  }
}

basket.shift(0);

console.log(basket.join(" "));
