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
  .split("\n");

const N = Number(input[0]);
let count = N;
let word;

for (let i = 1; i <= N; i++) {
  word = input[i];
  for (let j = 0; j < word.length - 1; j++) {
    if (word[j] != word[j + 1] && !!word.slice(j + 1).includes(word[j])) {
      count--;
      break;
    }
  }
}

console.log(count);

console.log("input-----------------------------------------------------------");
console.log(input);
