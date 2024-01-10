const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n")

const array = input[1].split(' ').map(Number);
console.log(array.filter((value) => value === Number(input[2])).length);