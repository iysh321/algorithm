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

console.log("input-----------------------------------------------------------");
console.log(input);
