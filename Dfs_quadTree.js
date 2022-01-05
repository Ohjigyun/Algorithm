function isEqual(arr){
    const number = arr[0][0]
    
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr[i].length ; j++){
            if(arr[i][j] !== number){
                return false;
            }
        }
    }
    return true;
}

function solution(arr) {
    let cnt1 = 0;
    let cnt2 = 0;
    
    dfs(arr)
    
    return [cnt1, cnt2]
    
    function dfs(arr){
        if(isEqual(arr)){
            if(arr[0][0]){
                cnt2++
                return;
            }else{
                cnt1++
                return;
            }
        }
        const mid = Math.floor(arr.length / 2 );
        
        const first = arr.slice(0, mid).map(el=>el.slice(mid))
        const second = arr.slice(0, mid).map(el=>el.slice(0, mid))
        const third = arr.slice(mid).map(el=>el.slice(0, mid))
        const fourth = arr.slice(mid).map(el=>el.slice(mid))
        
        dfs([...first])
        dfs([...second])
        dfs([...third])
        dfs([...fourth])
    }
}