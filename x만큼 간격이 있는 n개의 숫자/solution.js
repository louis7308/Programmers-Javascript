// 내가 한 풀이
function solution(x, n) {
  let answer = [];
  let y = x;
  for(let i = 0; i < n; i++) {
    answer[i] = y;
    y += x 
  }
  return answer;
}

// 다른 사람 풀이
function solution(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}