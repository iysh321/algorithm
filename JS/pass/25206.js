const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

function grade(grade) {
  if ("A+" === grade) {
    return 4.5;
  }
  if ("A0" === grade) {
    return 4.0;
  }
  if ("B+" === grade) {
    return 3.5;
  }
  if ("B0" === grade) {
    return 3.0;
  }
  if ("C+" === grade) {
    return 2.5;
  }
  if ("C0" === grade) {
    return 2.0;
  }
  if ("D+" === grade) {
    return 1.5;
  }
  if ("D0" === grade) {
    return 1.0;
  }
  if ("F" === grade) {
    return 0.0;
  } else {
    return "pass";
  }
}

let score = 0;
let total = 0;

for (let i = 0; i < input.length; i++) {
  if (grade(input[i][2]) === "pass") continue;
  score += Number(input[i][1]) * Number(grade(input[i][2]));
  total += Number(input[i][1]);
}
console.log(score / total);
