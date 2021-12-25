function solution(s){
    let arr = []
    for(let i = 0 ; i < s.length ; i ++){
        if(s[i] === "("){
            arr.push(s[i])
        }else{
            if(arr[arr.length-1] === "("){
                arr.pop()
            }else{
                return false
            }
        }
    }
    return arr.length === 0 ? true : false
}

/*
function solution(s){
    s=s.split('')
    let cnt = 0
    while(s.length !== 0){
        for(let i = 0 ; i < s.length ; i++){
            if(s[i] === "(" && s[i+1] === ")"){
                s.splice(i,2)
                cnt++
            }
        }
        if(cnt === 0){
            return false
        }
        cnt = 0
    }
    return true
}
*/

/*
    let cnt = 0
    while(s.length !== 0){
        cnt = s.length
        s = s.split('()').join('')
        if(cnt === s.length){
            return false
        }
    }
    return true
    */