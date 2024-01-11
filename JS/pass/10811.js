//https://www.acmicpc.net/status?user_id=i_y&problem_id=10811&from_mine=1

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
  const reversedPart = basket.slice(input[i][0] - 1, input[i][1]).reverse();
  basket.splice(input[i][0] - 1, reversedPart.length, ...reversedPart);
}

console.log(basket.join(" "));
