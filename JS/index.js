//* readFileSync 제출용
// 0
// /dev/stdin

//* readFileSync 풀이용
// example.txt

//* 여러줄 일때
// .split("\n").map((line) => line.split(" "));
// .split("\n").map((line) => line.split(" ").map(Number));

console.log("----------------------------------------------------------------");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n")

for(let i = 0; i < input.length; i++){
	let data = input[i].split(' ').map(Number);
  	console.log(data[0] + data[1]);
}


console.log("input-----------------------------------------------------------");
console.log(input);
