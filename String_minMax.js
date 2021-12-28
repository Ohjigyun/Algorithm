function solution(s) {
    let arr = s.split(' ');
    let newArr = arr.map(el => parseInt(el))
    newArr.sort((a,b)=>b-a);
    let result = ''
    result += newArr[newArr.length-1].toString()+ ' '    
    result += newArr[0].toString() 
    
    return result
    
}