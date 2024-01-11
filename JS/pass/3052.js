//https://www.acmicpc.net/problem/3052
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result = [];

input.map((value) => result.push(value % 42));
console.log([...new Set(result)].length);
