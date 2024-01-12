const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const num1 = Number(input[0].split("").reverse().join(""));
const num2 = Number(input[1].split("").reverse().join(""));

console.log(num1 > num2 ? num1 : num2);
