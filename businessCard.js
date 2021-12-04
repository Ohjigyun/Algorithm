function solution(sizes) {
    let row = []
    let column = [];
    for(let i = 0 ; i < sizes.length ; i++){
        if(sizes[i][0] >= sizes[i][1]){
            row.push(sizes[i][0])
            column.push(sizes[i][1])
        }else{
            row.push(sizes[i][1])
            column.push(sizes[i][0])
        }
    }
    row.sort((a,b)=>b-a)
    column.sort((a,b)=>b-a)
    return row[0] * column[0]
    
}