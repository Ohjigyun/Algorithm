function solution(numbers) {
    if(numbers.filter(el=>0 === el).length ===
       numbers.length){
        return "0"
    }
    numbers = numbers.map(el=>el.toString())
    numbers = numbers.sort((a,b)=> (b+a) - (a+b))
    return numbers.join('')
}


/* 버블 정렬 => 시간복잡도 아웃
function solution(numbers) {
    numbers = numbers.map(el=>el.toString())
    numbers.sort()
    let temp;
    let ans ='';
    
    for(let i = 0 ; i < numbers.length ; i++){
        for(let j = 0 ; j < numbers.length -i; j++){
            if(numbers[j]+numbers[j+1] > numbers[j+1] + numbers[j]){
                temp = numbers[j]
                numbers[j] = numbers[j+1]
                numbers[j+1] = temp
            }
        }
    }
    for(let i = numbers.length-1 ; i >= 0 ; i--){
        ans += numbers[i]
    }
    return ans
    
    
}


*/