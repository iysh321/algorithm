//https://www.acmicpc.net/problem/2292

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
  


let range = 1, block = 1;

while (block < input[0]) {    
  block += 6 * range;

  range++;
}

console.log(range);
