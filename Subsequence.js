//LCS

const LCS = function (str1, str2) {
    const arr = Array(str1.length+1).fill(-1).map(el=>Array(str2.length+1).fill(-1))
    for(let i = 0 ; i <= str1.length; i++){
      for(let j = 0 ; j <= str2.length ; j++){
        if(i===0 || j ===0){
          arr[i][j] = 0;
        }else if (str1[i-1] === str2[j-1]){
          arr[i][j] = 1+arr[i-1][j-1];
        }else{
          arr[i][j] = Math.max(arr[i-1][j] ,  arr[i][j-1])
        }
      }
    }
    return arr[str1.length][str2.length]
  };
  /*
  const LCS = function (str1, str2) {
    const M = str1.length;
    const N = str2.length;
    const memo = [];
    // 중복 계산을 방지하기 위해 left, right
    for (let i = 0; i < M + 1; i++) memo.push(Array(N + 1).fill(-1));
  
    const compareOneByOne = (left, right, len) => {
      if (memo[left][right] !== -1) return memo[left][right];
  
      if (left === str1.length || right === str2.length) return 0;
  
      if (str1[left] === str2[right]) {
        memo[left][right] = 1 + compareOneByOne(left + 1, right + 1, len + 1);
        return memo[left][right];
      }
  
      memo[left][right] = Math.max(
        compareOneByOne(left + 1, right, len), //
        compareOneByOne(left, right + 1, len)
      );
      return memo[left][right];
    };
  
    return compareOneByOne(0, 0, 0);
  };
  */

 // --------------------------------------------------------------------------------
 //LCLS
 // naive solution: O(N^2)
// const LSCS = function (arr) {
//   let max = -100000;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = arr[i];
//     if (sum > max) max = sum;
//     for (let j = i + 1; j < arr.length; j++) {
//       sum = sum + arr[j];
//       if (sum > max) max = sum;
//     }
//   }
//   return max;
// };

// dynamic programming: O(N)
// const LSCS = function (arr) {
//   let subArrSum = 0; // 연속 배열의 합
//   let max = Number.MIN_SAFE_INTEGER; // 정답의 후보를 저장
//   for (let i = 0; i < arr.length; i++) {
//     subArrSum = subArrSum + arr[i];
//     if (subArrSum > max) max = subArrSum;

//     // 연속된 구간의 합이 음수인 경우,
//     // 해당 부분은 버리고 다시 시작해도 된다.
//     if (subArrSum < 0) {
//       subArrSum = 0;
//     }
//   }

//   return max;
// };

// also dynamic 2: O(N)
const LSCS = function (arr) {
    let subArrSum = arr[0];
    let max = arr[0]; // 정답의 후보를 저장
    for (let i = 1; i < arr.length; i++) {
      // subArrSum는 바로 직전의 요소까지 검토했을 때 가장 연속합
      // 연속합에 추가로 검토하는 요소, 즉 arr[i]를 더하는 것보다
      // arr[i] 하나의 값이 더 큰 경우 (subArrSum가 음수일 경우)
      // subArrSum를 버리는 게 좋다.
      // 쭉 더해서 음수인 부분은 굳이 더할 필요가 없다.
      subArrSum = Math.max(subArrSum + arr[i], arr[i]);
      max = Math.max(max, subArrSum);
    }
  
    return max;
  };
  
  /*
    "연속된" 부분배열
    arr.sort((a,b)=>a-b)
    if(arr[arr.length-1] < 0 ){
      return arr[0]
    }
    arr = arr.filter(el=>el > 0).reduce((acc,cur)=>acc+cur)
    return arr
  */
  

 // --------------------------------------------------------------------------------
 //LIS

 const LIS = function (arr) {
    let arr2 = Array(arr.length).fill(1)
    for(let i = 1 ; i < arr.length ; i++){
      for(let j = 0 ; j < i ; j++){
        if(arr[i]>arr[j] && arr2[i] <arr2[j] +1){
          arr2[i] = arr2[j]+1
        }
      }
    }
    return Math.max(...arr2)
    //TODO: 여기에 코드를 작성합니다.
  };
  
  /*
  const LIS = function (arr) {
    const memo = Array(arr.length).fill(-1)
    memo[memo.length-1]=1
    const calLIS = (idx)=>{
      if(memo[idx] !== -1 ) return memo[idx]
  
      let max = 1
      for(let i =idx+1 ; i < arr.length; i++){
        const len = calLIS(i)
        if(arr[idx] < arr[i]){
          max = Math.max(max, len+1)
        }
      }
      memo[idx]=max
      return memo[idx]
    }
    calLIS(0)
    return Math.max(...memo)
  };
  */