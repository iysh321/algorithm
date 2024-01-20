const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  
let N = Number(input)

for (let i = 2; i <= N; i++) {
  while (N % i === 0) {
    N /= i;
    console.log(i)
  }
  if (N === 1) break;
}
