function solution(operations) {
  const heap = [];

  function swap(num) {
    if(heap.length === 0) heap.push(num);
    else {
      let flag = false, i = 0;
      while(!flag) {
        if(num < heap[i]) i++;
        else {
          heap.splice(i, 0, num);
          flag = true;
        }
      }
    }
  }

  for(let i = 0; i < operations.length; i++) {
    let arr = operations[i].split(' ');
    arr[1] = arr[1] | 0;
    if(arr[0] === 'I') swap(arr[1]);
    else {
      if(arr[1] === 1) heap.shift();
      else heap.pop();
    }
  }

  if(heap.length === 0) return [0, 0];

  let result = [heap[0], heap[heap.length - 1]];

  return result;
}
