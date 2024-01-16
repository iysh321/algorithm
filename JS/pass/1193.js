//https://www.acmicpc.net/submit/1193

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
