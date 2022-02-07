//위장
/*
스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

종류	이름
얼굴	동그란 안경, 검정 선글라스
상의	파란색 티셔츠
하의	청바지
겉옷	긴 코트
스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.
*/

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
  
  function solution(clothes) {
      const obj = {};
      const arr = [];
      for(const item of clothes){
          if(obj[item[1]]){
              obj[item[1]].push(item[0])
          }else{
              obj[item[1]] = [item[0]]
          }
      }
      for(const key in obj){
          arr.push(obj[key].length)
      }
      let tempSum = 0
      let key = Object.keys(obj)
      if(arr.filter(el=> el === 1).length === arr.length){
          return Math.pow(2 , key.length) - 1
      }
      
      let multiSum = 0
      let keysArr = Object.keys(obj)
      let tempArr = [];
      
      if(Object.keys(obj).length === 1){
          return arr[0]
      }else{
          const solo = arr.reduce((acc,cur)=> acc+cur)
          for(let i = 2 ; i <= Object.keys(obj).length ; i++){
              tempArr = combinations(keysArr , i)
              for(let j = 0 ; j < tempArr.length ; j++){
                  let tempNumber = 1
                  for(let k = 0 ; k < i ; k++){
                      tempNumber *= obj[tempArr[j][k]].length
                  }
                  multiSum += tempNumber
              }    
          }
          multiSum += solo
          //2개픽 3개픽 4개픽 ... N개픽해서 경우의수 창조
      }
      return multiSum
  
  }

  /*
프로그래머스 모범 답안

function solution(clothes) {
    return Object.values(clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
}

function solution(clothes) {
    let answer = 1;
    const obj = {};
    for(let arr of clothes) {
        obj[arr[1]] = (obj[arr[1]] || 0) + 1;
    }

    for(let key in obj) {
        answer *= (obj[key]+1);
    }

    return answer - 1;
}


  */