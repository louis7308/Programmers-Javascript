function solution(phone_number) {
  let answer = '';
  const len = phone_number.length - 4;
  answer = "*".repeat(len) + phone_number.substring(len)
  return answer;
}




