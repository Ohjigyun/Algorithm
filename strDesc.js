function solution(s) { 
    let upper = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
    let lower = upper.map(el=>el.toLowerCase())
    let arr = upper.concat(lower)
    lower = lower.reverse()
    upper = upper.reverse()
    let obj = {}
    for(let i = 0 ; i < s.length ; i++){
        if(obj[arr.indexOf(s[i])] === undefined){
            obj[arr.indexOf(s[i])] = s[i]
        }else {
            obj[arr.indexOf(s[i])] += s[i]
        }
    }
    let result = ''
    for(let i = 51 ; i >= 0 ; i --){
        if(obj[i] !== undefined){
            result = result + obj[i]
        }
    }
    return result
}