const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const coins = [25, 10, 5, 1];
let result = [];

for (let i = 1; i <= input[0]; i++) {
  let rest = input[i];

  for (let j = 0; j < coins.length; j++) {
    result.push(Math.floor(rest / coins[j]));
    rest = rest % coins[j];
  }

  console.log(result.join(" "));
  rest = 0;
  result = [];
}
