const input = require("fs")
  .readFileSync(0)
  .toString()
  .split("\n")
  .map((line) => line.split(" "));

let [H, M] = input[0].map(Number);
let time = Number(input[1]);

H = Math.floor((H * 60 + M + time) / 60);
M = (H * 60 + M + time) % 60;
if (H >= 24) {
  H -= 24;
}

console.log(H, M);
