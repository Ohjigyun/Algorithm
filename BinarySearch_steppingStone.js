function solution(distance, rocks, n) {
    let left = 1;
    let right = distance;
    let result = 0;
    
    const sortedRocks = rocks.sort((a,b) => a-b);
    
    while( left <= right ){
        const mid = Math.floor((left + right)/2);
        let diff = 0;
        let cnt = 0;
        let min = distance

        
        for(const rock of rocks){
            if(rock - diff < mid){
                cnt ++
                if(cnt > n ) break;
            }else{
                min = Math.min(min , (rock - diff))
                diff = rock
            }
        }
        if(cnt > n ){
            right = mid - 1
        }else{
            result = min
            left = mid + 1
        }
    }
    
    return result 
}