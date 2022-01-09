// 내가 한 풀이
function solution(num) {
  let answer = 0;
  while (num !== 1) {
    if (answer > 500) {
      return -1;
    }
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return answer;
}

// 다른 사람의 풀이
function collatz(num) {
  let answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
