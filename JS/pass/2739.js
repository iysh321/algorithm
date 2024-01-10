const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs").readFileSync(filePath).toString();

let N = Number(input);

for (let idx = 1; idx < 10; idx++) {
  console.log(`${N} * ${idx} = ${idx * N}`);
}
