/*
정수 n, left, right가 주어집니다. 다음 과정을 거쳐서 1차원 배열을 만들고자 합니다.

n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.
정수 n, left, right가 매개변수로 주어집니다. 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성해주세요.
*/

function solution(n, left, right) {
    let quotient1 = Math.floor(left/n)
    let idx1 = left % n
    let quotient2 = Math.floor(right/n)
    let idx2 = right % n
    
    console.log(quotient1 , idx1 , quotient2 , idx2)
    const arr = [];
    // quotient+1 만큼 quotient+1을 넣고 n까지 증가
    for(let i = quotient1 ; i <= quotient2 ; i++){
        for(let j = 0 ; j < i+1 ; j++){
            arr.push(i + 1)
        }
        for(let k = i+2 ; k <= n ; k++){
            arr.push(k)
        }
    }
    return arr.slice(idx1 , arr.length - (n-idx2-1))
}

/*
프로그래머스 모범 답안

function solution(n, left, right) {
    var answer = [];

    for (let i = left; i <= right; i++) {
        answer.push(Math.max(i % n, parseInt(i / n)) + 1)
    }

    return answer;
}

*/