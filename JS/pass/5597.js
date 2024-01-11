const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) {
    console.log(i);
  }
}
