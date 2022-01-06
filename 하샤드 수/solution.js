// 내가 한 풀이
function solution(x) {
  let digit = String(x).split('');
  let sum = 0;
  for(let i = 0; i < digit.length; i++) {
    sum += parseInt(digit[i]);
  }
  return (x % sum === 0) ? true : false;
}

// 다른 사람 풀이
function Harshad(n){
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

console.log(Harshad(13))