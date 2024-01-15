//https://www.acmicpc.net/problem/10798

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