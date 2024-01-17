//* readFileSync 제출용
// 0
// /dev/stdin

//* readFileSync 풀이용
// example.txt

//* 여러줄 일때
//! 아래 두줄 코드는 시간이 오래걸림 (반복문 여러번 사용)
// .split("\n").map((line) => line.split(" "));
// .split("\n").map((line) => line.split(" ").map(Number));

console.log("----------------------------------------------------------------");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let number = [];

for (let i = 1; i <= input[0]; i++) {
  if (input[0] % i === 0) {
    number.push(i);
  }
}

console.log(number[input[1] - 1] ? number[input[1] - 1] : 0);

console.log("input-----------------------------------------------------------");
console.log(input);
