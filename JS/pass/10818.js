const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map((line) => line.split(" ").map(Number));

console.log(Math.min(...input[1]), Math.max(...input[1]));
