function solution(n) {
    let sum = 0;
    let cnt = 0;
    for(let i = 1 ; i<=n/2 ; i++){
        for(let j = i ; j <=n/2 ; j++){
            sum += j
            if(sum === n){
                cnt++
                break;
            }
            if(sum > n) break;
        }
        sum = 0;
    }
    if(n%2 ===1 && Math.floor(n/2)+Math.ceil(n/2) === n){
        return cnt+2
    }
    return cnt+1
    
}