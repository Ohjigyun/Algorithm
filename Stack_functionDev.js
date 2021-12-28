function solution(progresses, speeds) {
    let arr = []
    for(let i = 0 ; i < progresses.length ; i++){
        arr.push(Math.ceil((100-progresses[i])/speeds[i]))
    }
    let temp = []
    let result = []
    for(let i = 0 ; i < arr.length ; i++){
        debugger;
        temp.push(arr[i])
        if(temp[0] < arr[i+1]){
            result.push(temp.length)
            temp = []
        }
    }
    result.push(temp.length)
    return result
}