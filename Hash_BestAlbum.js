function solution(genres, plays) {
    const obj = {};
    for(let i = 0 ; i < genres.length; i++){
        if(!Object.keys(obj).includes(genres[i])){
            obj[genres[i]] = plays[i]
        }else{
            obj[genres[i]] += plays[i]
        }
    }
    let sort = Object.entries(obj).sort(([,a],[,b])=>b-a)
    let arr = []
    const result = []

    for(let i = 0 ; i < sort.length ; i++){
        for(let j = 0 ; j < genres.length ; j++){
            if(genres[j] === sort[i][0]){
                arr.push(plays[j])
            }
        }
        arr.sort((a,b)=>b-a)
        result.push(plays.indexOf(arr[0]))
        plays.splice(plays.indexOf(arr[0]), 1 , 0)
        if(arr[1]){
            result.push(plays.indexOf(arr[1]))    
        }
        arr=[]
    }
    return result
}