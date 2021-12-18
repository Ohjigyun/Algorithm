// 하드코딩
function solution(arr1, arr2) {
    let arr = [];
    let result = [];
    let num = 0;
    for(let i = 0 ; i < arr1.length ; i++){
        arr.push([])
        result.push([])
    }
    
    for(let i = 0 ; i < arr1.length; i++){
        for(let j = 0 ; j< arr2.length; j++){
            for(let k = 0 ; k < arr2[0].length ; k++){
                arr[i].push(arr1[i][j] * arr2[j][k]) 
            }
        }
    }
    
    for(let i = 0 ; i < arr1.length; i++){
        for(let j = 0 ; j< arr2[0].length; j++){
            for(let k = 0 ; k < arr2.length ; k++){
                num = num + arr[i][arr2[0].length*k+j]
            }
            result[i].push(num)
            num = 0
        }
    }

    return result

    
}

// 숏코딩
function solution(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((x,y) => row.reduce((a,b,c) => a + b * arr2[c][y], 0)))
}

