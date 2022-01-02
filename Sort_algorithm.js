// insertionSort
const insertionSort = function (arr,callback = (el) => el) {
    let result = [arr[0]];
    for(let i = 1 ; i < arr.length ; i++){
      if(callback(arr[i]) >= callback(result[i-1])){
        result.push(arr[i])
      }else{
        for(let j = 0 ; j < i ; j++){
          if(callback(arr[i])<= callback(result[j])){
            let left = result.slice(0,j);
            let right = result.slice(j)
            result = left.concat(arr[i], right)
            break;
          }
        }
      }
    }
    return result
  };
  
  /* 
    let num;
    let count = 0 
    for(let i = 0 ; i< arr.length ; i++){
      if(arr[i] > arr[i+1]){
        num = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = num
        count ++
      }
    }
    if(count === 0 ){
      return arr
    }
    return insertionSort(arr)
    */


//quickSort
const quickSort = function (arr,callback = (el) => el) {
    //퀵 정렬 => 약간 binary search 느낌이다
    if(arr.length <= 1){
      return arr;
    }
    const center = arr[0];
    const left = [];
    const right = [];
  
    for(let i = 1 ; i < arr.length ; i++){
      if(callback(arr[i]) < callback(center)){
        left.push(arr[i])
      }else{
        right.push(arr[i])
      }
    }
  
    const leftSort = quickSort(left, callback)
    const rightSort = quickSort(right, callback)
    return [...leftSort , center , ...rightSort]
  };
  
  /*
  let result = [arr[0]];
    for(let i = 1 ; i < arr.length ; i++){
      if(callback(arr[i]) >= callback(result[i-1])){
        result.push(arr[i])
      }else{
        for(let j = 0 ; j < i ; j++){
          if(callback(arr[i])<= callback(result[j])){
            let left = result.slice(0,j);
            let right = result.slice(j)
            result = left.concat(arr[i], right)
            break;
          }
        }
      }
    }
    return result
    */


//mergeSort
const mergeSort = function (arr) {
    const merge = (left , right)=>{
      const result = [];
      let idx1 = 0;
      let idx2 = 0;
      let len = left.length + right.length;
      for(let i = 0 ; i < len ; i++){
        if(idx1 >= left.length){
          result.push(right[idx2]);
          idx2++
        }else if(idx2 >= right.length || left[idx1] <= right[idx2]){
          result.push(left[idx1]);
          idx1++
        }else{
          result.push(right[idx2]);
          idx2++
        }
      }
      return result
    }
  
    if(arr.length===1){
      return arr
    }
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));
    const merged = merge(left,right)
    return merged
  };
  