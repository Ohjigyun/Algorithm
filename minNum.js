function solution(A,B){
    A.sort((a,b)=>b-a)
    B.sort((a,b)=>a-b)
    let num = 0
    for(let i = 0 ; i < A.length ; i++){
        num += A[i] * B[i]
    }
    return num
}