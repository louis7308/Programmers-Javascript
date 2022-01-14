function solution(n, arr1, arr2) {
    let answer = [];
    for(let i=0; i<n; i++){
        const twoInt = (arr1[i] | arr2[i]).toString(2);
           let downLine = [];
        for(let j = twoInt.length-n; j < twoInt.length; j++) {
            if (twoInt[j] === '1') { 
                downLine.push('#');
            } else {
                downLine.push(' ');
            }
        }
        answer.push(downLine.join(''));
    }
    return answer;
}