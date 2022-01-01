const binarySearch = function (arr, target) {
    //단순한 순회로는 왜 통과할수 없을까?? findIndex => 실행 시간 초과 indexOf => 테스트는  통과 이진탐색 구현 x 
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      const middle = start + Math.floor((end - start) / 2);
      if (arr[middle] === target) {
        return middle;
      }else if(arr[middle] < target){
        start = middle + 1;
      }else if(arr[middle] > target){
        end = middle - 1;
      }
    }
    return -1;
  }
  
  
  /* 왜 이진 탐색이 아니지?
    let start = 0 
    let end = arr.length -1
    let center = 0;
  
    while(start+2 <= end){
      center = Math.floor((end+start)/2)
      if(arr[center]===target){
        return center
      }else if(arr[center] < target){
        start = center
      }else if(arr[center] > target){
        end = center
      }
    }
    return -1
    */
  