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
  .split('\n').map(Number);
input.pop(); 

const result = input.map(function solution(num) {
  const result = []; 

  for (let i=1; i < num; i++) {  
    if (num % i === 0) {
      result.push(i);       
    }
  }
  if (result.reduce((acc, cur) => acc + cur, 0) === num) {
    return `${num} = ` + result.join(' + ');
  } else {
    return `${num} is NOT perfect.`;
  }
}).join('\n')
console.log(result)

console.log("input-----------------------------------------------------------");
console.log(input);
