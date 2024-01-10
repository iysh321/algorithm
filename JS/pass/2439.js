const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = Number(require("fs").readFileSync(filePath).toString());

for (let i = 1; i <= input; i++) {
  let pattern = " ".repeat(input - i) + "*".repeat(i);
  console.log(pattern);
}

//repeat() 메서드는 문자열을 주어진 횟수만큼 반복하여 새로운 문자열을 생성
