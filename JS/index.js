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
const input = require("fs").readFileSync(filePath).toString().trim().split("");

let phone = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};
let result = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 2; j <= 9; j++) {
    if (phone[j].includes(input[i])) {
      result += j + 1;
      break;
    }
  }
}

console.log(result);

console.log("input-----------------------------------------------------------");
console.log(input);
