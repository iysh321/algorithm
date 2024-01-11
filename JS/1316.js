//https://www.acmicpc.net/problem/1316

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
