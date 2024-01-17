//https://www.acmicpc.net/problem/5086

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.pop();
input.map((v) => {
  if (v[1] % v[0] == 0) {
    console.log("factor");
  } else if (v[0] % v[1] == 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
});
