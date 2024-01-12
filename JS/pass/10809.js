//https://www.acmicpc.net/status?user_id=i_y&problem_id=10809&from_mine=1
// 문제 설명이 애매하다.
// a ~ z 순서대로 모든 알파벳에 대해서, 단어에 해당 알파벳이 있으면 해당 글자의 index를, 없으면 -1을 출력한다.
// indexOf는 없으면 -1을 출력
// 중복시에는 가장 빠른 index 번호를 출력한다.

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let list = [];

for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
  list.push(input.indexOf(String.fromCharCode(i)));
}

console.log(list.join(" "));
