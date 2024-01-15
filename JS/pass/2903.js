// https://www.acmicpc.net/problem/2903
// 참고 - https://arnopark.tistory.com/639

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const result = (2 ** input + 1) ** 2;
console.log(result);
