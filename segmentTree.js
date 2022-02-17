const rangeMinimum = function (arr, ranges) {
    const minTree = (arr, ts, te, tree, idx)=>{
      if(ts===te){
        tree[idx] = arr[ts];
        return arr[ts]
      }
      const mid = Math.floor((ts+te)/2);
      tree[idx]=Math.min(minTree(arr,ts,mid,tree,idx*2+1), minTree(arr,mid+1,te,tree,idx*2+2))
      return tree[idx]
    }
    const height = Math.ceil(Math.log2(arr.length));
    const size = Math.pow(2,height+1)-1
    const tree = Array(size).fill(null);
    minTree(arr,0,arr.length-1,tree,0)
  
    const findMin = (ts,te,rs,re,idx)=>{
      if(rs<=ts && te <= re) return tree[idx]
      if(te<rs || re < ts ) return Number.MAX_SAFE_INTEGER;
      const mid = Math.floor((ts+te)/2);
      return Math.min(findMin(ts,mid,rs,re,2*idx+1), findMin(mid+1,te,rs,re,2*idx+2))
    }
  
    const mins = ranges.map(el=>{
      const [start,end] = el
      return findMin(0, arr.length-1 , start, end,0);
    })
    return mins
  };
  /*
  [0-5]
  1
  [0-2] [3-5]
    1     7
  [0-1][2] [3-4][5]
    1   2    7   11
  [0] [1] [2] [3] [4] [5]
   1   3   2   7   9   11  
  */
  
