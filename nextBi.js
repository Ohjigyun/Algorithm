function solution(n) {
    let bi = n.toString(2)
    let cnt = 0
    for(let i = 0 ; i < bi.length ; i++){
        if(bi[i] === "1"){
            cnt++
        }
    }
    let tempBi;
    let cnt2 = 0
    for(let j = n+1 ; j<= 1000000 ; j++){
        tempBi = j
        tempBi = tempBi.toString(2)
        for(let k = 0 ; k< tempBi.length ; k++){
            if(tempBi[k] === "1"){
                cnt2++
            }
        }
        if(cnt2 === cnt){
            return j
        }
        cnt2 = 0 
    }
    
    
}