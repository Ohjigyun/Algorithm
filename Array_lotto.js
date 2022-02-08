/*
로또 6/45(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다. 아래는 로또의 순위를 정하는 방식입니다. 1

순위	당첨 내용
1	6개 번호가 모두 일치
2	5개 번호가 일치
3	4개 번호가 일치
4	3개 번호가 일치
5	2개 번호가 일치
6(낙첨)	그 외
로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다. 하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다. 당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다. 이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.
*/

function solution(lottos, win_nums) {
    //번호를 알아볼 수 없는 로또
    const unknown = lottos.filter(el => el === 0)
    //번호를 알 수 있는 로또
    const known = lottos.filter(el=> el !== 0)
    //번호를 알 수 있는 로또와 당첨번호를 합친 배열
    const arr = win_nums.slice()
    for(const el of known){
        arr.push(el)
    }
    //당첨된 번호의 개수
    const mergeArr = [...new Set(arr)]
    const winNumber = arr.length - mergeArr.length
    const answer = [0,0];
    if(winNumber === 6){
        return [1,1]
    }
    for(let i = 1 ; i <= 5 ; i ++){
        if(winNumber === i){
            answer[1] = 7-i
        }
    }
    for(let i = 1 ; i<= 6 ; i++){
        if(unknown.length + winNumber === i){
            answer[0] = 7-i
        }
    }
    if(unknown.length + winNumber === 0){
        return [6,6]
    }
    if(unknown.length === 6){
        return [1,6]
    }
    return answer

}

/*

프로그래머스 모범답안
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}

*/