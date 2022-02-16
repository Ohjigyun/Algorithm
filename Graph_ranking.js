// 25 / 100점 놔뒀다가 다시풀어보기

function solution(n, results) {
    const stat = {}
    for(const result of results ){
        // 승자에 대한 기록
        if(stat[`${result[0]}`] === undefined){
            stat[`${result[0]}`] = [[result[1]],[]]
        }else if (stat[`${result[0]}`] !== undefined){
            stat[`${result[0]}`][0].push(result[1])
        }
        // 패자에 대한 기록
        if(stat[`${result[1]}`] === undefined){
            stat[`${result[1]}`] = [[] , [result[0]]]
        }else if (stat[`${result[1]}`] !== undefined){
            stat[`${result[1]}`][1].push(result[0])
        }
        
    }
    // console.log(stat)
    // console.log(Object.entries(stat))
    let arr = [];
    for(const record of Object.entries(stat)){
        const a = record[1][0].length;
        const b = record[1][1].length;
        if(a+b === n-1){
            arr.push(record)
        }
    }
    
    if(arr.length === 0 ) return 0
    
    if(arr[0][1][0].length === 1 || arr[0][1][1].length === 1){
        return arr.length +1
    }else{
        return arr.length
    }
    
    
}