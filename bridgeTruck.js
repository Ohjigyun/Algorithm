function solution(bridge_length, weight, truck_weights) {
    const queue = [];
    let time = 1;
    let sum;
    let temp;
    for(let i = 0 ; i < bridge_length ; i++){
        queue.push(0)
    }
    //1초
    queue.push(truck_weights.shift())
    sum = queue.reduce((acc,cur)=> acc+ cur)
    queue.shift()
    
    while(sum+truck_weights.length !== 0){
        temp = queue.shift()
        sum = queue.reduce((acc,cur)=> acc+ cur)
        queue.unshift(temp)
        temp = truck_weights.shift()
        if(weight >= sum + temp ){
            queue.push(temp)
            queue.shift()
        }else{
            queue.push(0)
            queue.shift()
            if(temp!==undefined){
                truck_weights.unshift(temp)
            }
        }
        time++
        sum = queue.reduce((acc,cur)=> acc+ cur)
    }
    return time
}