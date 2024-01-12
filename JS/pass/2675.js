const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

for (let i = 1; i <= input[0]; i++) {
  let result = "";
  for (let j = 0; j < input[i][1].length; j++) {
    result += input[i][1][j].repeat(input[i][0]);
  }
  console.log(result);
}
