function solution(genres, plays) {
    const genreMap = new Map();
    
    genres
        .map((genre, index) => [genre , plays[index]])
        .forEach(([genre, play] , index)=>{
            const data = genreMap.get(genre) || { total : 0 , songs : []}
            genreMap.set(genre, {
                total : data.total + play,
                songs : [...data.songs, { play , index }]
                    .sort((a,b)=> b.play - a.play)
                    .slice(0,2)
            })
    })
    
    return [...genreMap.entries()]
            .sort((a,b) => b[1].total - a[1].total)
            .flatMap(item => item[1].songs)
            .map(el => el.index)
    
    
}

/*

    //키 : 장르 , 밸류 : 총 횟수로 객체 만들기
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
        //plays 배열에 arr[0]에 해당하는 
        result.push(plays.indexOf(arr[0]))
        plays.splice(plays.indexOf(arr[0]), 1 , 0)
        if(arr[1]){
            result.push(plays.indexOf(arr[1]))    
        }
        arr=[]
    }
    return result
*/