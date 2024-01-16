// https://www.acmicpc.net/problem/2869

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.ceil((input[2] - input[1]) / (input[0] - input[1])));
