// 내가 한 풀이
function solution(arr1, arr2) {
  let answer = [[]];
  answer = arr1;
  
  for(let i =0; i < arr2.length; i++) {
    for(let j = 0; j < arr2[i].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}

// 다른 사람 풀이
function sumMatrix(A,B){
  return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}