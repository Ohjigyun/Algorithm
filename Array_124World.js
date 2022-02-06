/*
124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.

124 나라에는 자연수만 존재합니다.
124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.
*/

function solution(n) {
    let len;
    let sum = 0 ;
    for(let i = 1 ; i < Infinity ; i++){
        sum += Math.pow(3,i)
        if(sum >= n){
            len = i 
            break;
        }
    }
    const arr = Array.from(Array(len) , (_)=> 1)
    let tempSum = 0;
    
    tempSum = (Math.pow(3,len)-1)/2
    n = n- tempSum
    len--
    while(n > 0){
        if(n - Math.pow(3,len)*2 >= 0){
            arr[arr.length-1-len] = 4
            n = n - Math.pow(3,len)*2
            continue;
        }else if(n - Math.pow(3,len) >= 0){
            arr[arr.length-1-len] = 2
            n = n - Math.pow(3,len)
            continue;
        }
        len--
    }
    return arr.join('')
    
    
}

/*
프로그래머스 답안

function change124(n) {
  return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}

*/