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