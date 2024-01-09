let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const a = parseInt(input[0]);
const b = input[1];

const array = b.split("").map(Number);

console.log(a * array[2]);
console.log(a * array[1]);
console.log(a * array[0]);
console.log(a * b);

// 풀이 2
// console.log(a * Number(b[2]));
// console.log(a * Number(b[1]));
// console.log(a * Number(b[0]));
// console.log(a * b);
