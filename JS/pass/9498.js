let input = require("fs").readFileSync("/dev/stdin").toString().trim();
const score = Number(input);

if (score >= 90) {
  console.log("A");
} else if (score >= 80 && score < 90) {
  console.log("B");
} else if (score >= 70 && score < 80) {
  console.log("C");
} else if (score >= 60 && score < 70) {
  console.log("D");
} else {
  console.log("F");
}

// (80 <= score < 90) 형식은 올바르게 동작하지 않음
