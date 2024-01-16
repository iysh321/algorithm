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

const input = require("fs").readFileSync(filePath).toString().trim();

let x = Number(input);
let row = 1;

while (x > row) {
  x -= row++;
}
let num = row - x + 1;

if (row % 2 === 0) {
  console.log(`${x}/${num}`);
} else {
  console.log(`${num}/${x}`);
}

console.log("input-----------------------------------------------------------");
console.log(input);
