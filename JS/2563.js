//! 2차원 배열을 펼치고, 1을 체크하는 식으로 풀어야 함. 참고 - https://ggcoding.tistory.com/123
// x와 y의 차이 값 만큼 빼어 값을 중복된 값을 빼는식으로 구하면 똑같은 사각형이 2개 있을때 중복하여 값이 더해지는 문제 발생
// 2차원 배열문제를 2차원 배열문제로 풀려고 하지 않아 생긴 문제

// const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((line) => line.split(" ").map(Number));

// let duplication = 0;

// for (let i = 1; i <= input[0][0] - 1; i++) {
//   for (let j = i + 1; j <= input[0][0]; j++) {
//     if (
//       input[i][0] !== input[j][0] &&
//       input[i][1] !== input[j][1] &&
//       Math.max(input[i][0], input[j][0]) <
//         Math.min(input[i][0], input[j][0]) + 10 &&
//       Math.max(input[i][1], input[j][1]) <
//         Math.min(input[i][1], input[j][1]) + 10
//     ) {
//       let x = 10 - Math.abs(input[i][0] - input[j][0]);
//       let y = 10 - Math.abs(input[i][1] - input[j][1]);
//       duplication += x * y;
//     }
//   }
// }

// const total = 100 * input[0][0];

// console.log(total - duplication);
