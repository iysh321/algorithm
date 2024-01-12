# math

Math.min(a) - a값들 중 최소 a => ...Array / a,b,c
Math.max(a) - a값들 중 최대 a => ...Array / a,b,c

# 문자열

"a".repeat(i) - i 만큼 a 를 반복
str.indexOf("abc") - 찾고자 하는 index의 시작
str.lastIndexOf() - 역순으로 탐색
str.charCodeAt(index) - str의 아스키코드 (index 생략가능)
String.fromCharCode(97, 98) - 아스키코드(97, 98)를 문자열로

str.split("").reverse().join("") - 문자열을 뒤집는 방법 (문자열 -> 배열(뒤집고) -> 문자열)

# 배열

array.indexOf(a) - 배열에서 a에 대한 값의 index가 무엇인지
array.includes(a) - 배열에서 a에 대하여 값이 있는지 없는지 true false
array.join(" ") - 배열의 모든 값을 string으로 변환, 변환시에 어떤 값으로 이어 줄 것인지 설정
array.slice(a, b) - a 이상 b 미만의 값을 추출(자르기)
array.splice(a, b, ...c) - a부터 b개의 요소를 삭제하고 c의 값을 넣음 (...c 또는 c, d)
array.reverse(); - 배열 순서를 뒤바꿈

array.map(Number) - 배열 안에 값들을 Number 타입으로 변환
array.filter(Boolean) - 배열 안에 빈 문자열을 제거 (Boolean("") 는 false)
[...new Set(array)] - 배열 중복제거 (Set)
array.filter((v, i) => array.indexOf(v) === i) - 배열 중복제거 (filter, indexOf)
Array(3).fill().map((value, index) => index + 1) - 배열 1부터 3까지 숫자 순서대로 채우기
