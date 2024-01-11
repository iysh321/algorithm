"a".repeat(i) - i 만큼 a 를 반복

# math

Math.min(...Array) - 최소
Math.max(...Array) - 최대

# 배열

array.index(a) - 배열에서 a에 대한 값의 index가 무엇인지
array.includes(a) - 배열에서 a에 대하여 값이 있는지 없는지 true false
array.join(" ") - 배열의 모든 값을 string으로 변환, 변환시에 어떤 값으로 이어 줄 것인지 설정
array.slice(a, b) - a 이상 b 미만의 값을 추출(자르기)
array.splice(a, b, ...c) - a부터 b개의 요소를 삭제하고 c의 값을 넣음 (...c 또는 c, d)

[...new Set(array)] - 배열 중복제거 (Set)
array.filter((v, i) => array.indexOf(v) === i) - 배열 중복제거 (filter, indexOf)
Array(3).fill().map((value, index) => index + 1) - 배열 1부터 3까지 숫자 순서대로 채우기
