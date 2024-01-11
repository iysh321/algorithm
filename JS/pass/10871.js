const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map((line) => line.split(" ").map(Number));


console.log(input[1].filter((value) => value < Number(input[0][1])).join(" "));