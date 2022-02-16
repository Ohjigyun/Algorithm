/*
문제 설명
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
*/

function isPrime(num){
    if(num < 2 ) return false
    for(let i = 2; i * i<= num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true;
}

function combinations(arr, n) {
  // 1개만 뽑는다면 그대로 조합을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index 이후 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.slice(idx + 1);
    // 선택된 요소 이전 요소들을 제외하고 재귀 호출한다.
    const combis = combinations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 조합을 합쳐준다.
    const combine = combis.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result.push(...combine);
  });

  // 결과 반화
  return result;
}

function solution(nums) {
    const combiArr = combinations(nums , 3)
    // const set = [... new Set(combiArr.map(el => el.reduce((acc,cur)=> acc+cur)))]
    let count = 0;
    const arr = combiArr.map(el => el.reduce((acc,cur)=> acc+cur))
    for(const number of arr){
        if(isPrime(number)){
            count++
        }
    }
    
    return count
    
}

