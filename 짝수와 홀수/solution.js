// 내가 한 풀이
function solution(num) {
  let answer = '';
  answer = num % 2 !== 0 ? "Odd" : "Even";
  return answer;
}

// 다른 사람의 풀이
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}