//https://www.acmicpc.net/problem/2501

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

// 삼항연산자를 사용하지 않고 약수를 구한 배열길이와 input[1]을 비교하여 0을 리턴할 수도 있다.
