function solution(board, moves) {
    //보드를 그대로 쓰면 인덱스가 두개가 필요하니 옆으로 뉘우면
    let rotate = Array(board.length).fill(0).map(el=>Array(board.length).fill(0))
    let arr = board.slice()
    for(let i = 0 ; i < rotate.length ; i++){
        for(let j = 0 ; j<rotate.length ; j++){
            rotate[j][i] = arr[i][rotate.length-1-j]
        }
    }
    const stack = []
    let result = 0
    let idx;
    let doll;
    for(let i = 0 ; i < moves.length; i++){
        idx = board.length-moves[i]
        doll = rotate[idx].findIndex(el=>el!==0)
        if(doll!==-1){
            stack.push(rotate[idx][doll])
            rotate[idx][doll] = 0
            if(stack.length >= 2 &&(stack[stack.length-1]===stack[stack.length-2])){
                stack.pop()
                stack.pop()
                result+=2
            }
        }
    }
    return result
}