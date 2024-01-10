const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs").readFileSync(filePath).toString().split("\n");

for (let idx = 1; idx <= input[0]; idx++) {
  let numbers = input[idx].split(" ");
  console.log(
    `Case #${idx}: ${Number(numbers[0])} + ${Number(numbers[1])} = ${
      Number(numbers[0]) + Number(numbers[1])
    }`
  );
}
