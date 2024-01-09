// * readFileSync 제출용
//! 0
//! /dev/stdin

// * readFileSync 풀이용
//! example.txt

//* 여러줄 일때
//! .split("\n").map((line) => line.split(" "));

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

if (input[0] === input[1] && input[1] === input[2]) {
  console.log(input[0] * 1000 + 10000);
} else if (input[0] === input[1] || input[0] === input[2]) {
  console.log(input[0] * 100 + 1000);
} else if (input[1] === input[2]) {
  console.log(input[1] * 100 + 1000);
} else {
  const maxNumber = Math.max(...input);
  console.log(maxNumber * 100);
}
