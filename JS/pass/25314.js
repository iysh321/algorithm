const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs").readFileSync(filePath).toString();
const number = Number(input) / 4;
let printLong = "";
for (let idx = 1; idx <= number; idx++) {
  printLong += "long ";
}
console.log(printLong + "int");
