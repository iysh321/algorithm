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
const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map((line) => line.split(""));

let result = ""

const MaxArray = Math.max(...input.map((value) => value.length))

for (let i = 0; i < MaxArray; i++) {
  for (let j = 0; j < 5; j++) {
    if (input[j][i] === undefined) { continue }
    result += input[j][i] 
   }
}


console.log(result)


console.log("input-----------------------------------------------------------");
console.log(input);
