//* readFileSync 제출용
// 0
// /dev/stdin

//* readFileSync 풀이용
// example.txt

//* 여러줄 일때
// .split("\n").map((line) => line.split(" "));
// .split("\n").map((line) => line.split(" ").map(Number));

console.log("----------------------------------------------------------------");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = Number(require("fs").readFileSync(filePath).toString());

for (let i = 1; i <= input; i++) {
  let pattern = " ".repeat(input - i) + "*".repeat(i);
  console.log(pattern);
}

console.log("input-----------------------------------------------------------");
console.log(input);
