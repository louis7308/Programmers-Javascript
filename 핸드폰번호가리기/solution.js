// 내가 한 풀이
function solution(phone_number) {
  let answer = '';
  const len = phone_number.length - 4;
  answer = "*".repeat(len) + phone_number.substring(len)
  return answer;
}

// 다른 사람 풀이
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}