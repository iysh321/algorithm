const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

console.log(parseInt(input[0], Number(input[1])));
