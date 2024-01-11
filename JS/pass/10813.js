// https://www.acmicpc.net/problem/10813
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let basket = Array(input[0][0])
  .fill()
  .map((value, index) => index + 1);

for (let i = 1; i <= input[0][1]; i++) {
  let before0 = basket[input[i][0] - 1];
  let before1 = basket[input[i][1] - 1];

  basket[input[i][0] - 1] = before1;
  basket[input[i][1] - 1] = before0;
}

console.log(basket.join(" "));
