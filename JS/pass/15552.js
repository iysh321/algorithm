const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs").readFileSync(filePath).toString().split("\n");

let result = "";
for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(" ");
  result += Number(numbers[0]) + Number(numbers[1]) + "\n";
}
console.log(result);

//  시간제한이 있는 문제인데, console.log를 한 번만 쓰고 반복문을 여러번 쓰면 시간초과 걸림
