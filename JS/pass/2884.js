const input = require("fs").readFileSync(0).toString().split(" ").map(Number);

let [H, M] = input;

if (M - 45 < 0) {
  M = M + 60 - 45;
  if (H === 0) {
    H = H + 23;
  } else {
    H = H - 1;
  }
} else {
  M = M - 45;
}
console.log(H);
console.log(M);
