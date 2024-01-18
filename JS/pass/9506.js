//https://www.acmicpc.net/problem/9506
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n').map(Number);
input.pop(); 

const result = input.map(function solution(num) {
  const result = []; 

  for (let i=1; i < num; i++) {  
    if (num % i === 0) {
      result.push(i);       
    }
  }
  if (result.reduce((acc, cur) => acc + cur, 0) === num) {
    return `${num} = ` + result.join(' + ');
  } else {
    return `${num} is NOT perfect.`;
  }
}).join('\n')
console.log(result)

// 약수를 구할 때 제곱근 범위까지만 나누는 이유는 효율성 때문입니다. 양의 정수 N의 약수는 N의 제곱근보다 큰 수로는 나누어 떨어지지 않습니다. 만약 어떤 수가 N의 제곱근보다 큰 약수를 가지고 있다면, 그 수와 N/그 수 중 하나는 N의 제곱근보다 작을 것입니다.

// 약수를 구하는 과정에서 제곱근 범위까지만 확인하면, 시간복잡도를 줄일 수 있습니다. 만약 제곱근 이후의 범위까지 모두 확인해야 한다면 중복되는 계산이 많아져서 효율성이 떨어집니다.

// 간단한 예시로 설명하면, 어떤 수 N의 약수를 찾을 때, N이 36이라고 가정하겠습니다.

// 1로 나누면 36, 2로 나누면 18, 3으로 나누면 12, 4로 나누면 9, 5로 나누면 7이 됩니다.
// 여기서 주목할 점은 6 이상의 어떤 수로 나누어 떨어지는지 확인할 필요가 없다는 것입니다. 왜냐하면 이미 6 이하의 수로 나누어떨어지지 않았기 때문입니다. 더 큰 수로 나누어떨어지려면 나머지가 0이 되려면서 더 작은 수로 나누어떨어져야 합니다.
// 이렇게 특정 범위까지만 확인함으로써 불필요한 연산을 줄여서 알고리즘의 효율성을 높일 수 있습니다.