/*
자연수 n 개로 이루어진 중복 집합(multi set, 편의상 이후에는 "집합"으로 통칭) 중에 다음 두 조건을 만족하는 집합을 최고의 집합이라고 합니다.

각 원소의 합이 S가 되는 수의 집합
위 조건을 만족하면서 각 원소의 곱 이 최대가 되는 집합
예를 들어서 자연수 2개로 이루어진 집합 중 합이 9가 되는 집합은 다음과 같이 4개가 있습니다.
{ 1, 8 }, { 2, 7 }, { 3, 6 }, { 4, 5 }
그중 각 원소의 곱이 최대인 { 4, 5 }가 최고의 집합입니다.

집합의 원소의 개수 n과 모든 원소들의 합 s가 매개변수로 주어질 때, 최고의 집합을 return 하는 solution 함수를 완성해주세요.
*/

function solution(n, s) {
    if(n > s ){
        return [-1]
    }
    const result = []
    //일반적으로 가장 큰 곱이 되는 집합은 n등분 한것임
    if(s%n ===0){
        for(let i = 0 ; i < n ; i++){
            result.push(s/n)            
        }
    //n등분이 정확히 되지 않을때는 전부 버려서 넣은 후 남은 수만큼 넣어주면 됨
    }else{
        for(let i = 0 ; i < n ; i++){
            result.push(Math.floor(s/n))
        }
        const rest = s - result.reduce((acc,cur)=> acc+cur) 
        for(let i = 0 ; i < rest ; i++){
            result[result.length-1-i]++
        }
    }
    
    return result
}