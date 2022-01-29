//시간 초과 75 / 100 점 효율성 개선 필요

function solution(id_list, report, k) {
    // 동일한 신고건을 제거
    const newReport = report.filter((item, idx)=>{
        return report.indexOf(item) === idx
    })
    
    const reportObj = {}

    
    for(const id of newReport){
        if(!reportObj[id.split(' ')[1]]){
            reportObj[id.split(' ')[1]] = 1
        }else{
            reportObj[id.split(' ')[1]]++
        }
    }
    
    const pauseId = [];
    for(const key in reportObj){
        if(reportObj[key] >=k){
            pauseId.push(key)
        }
    }

    //id당 메일받은 횟수
    const resultObj ={}
    for(const id of newReport){
        if(pauseId.includes(id.split(' ')[1])){
           if(!resultObj[id.split(' ')[0]]){
               resultObj[id.split(' ')[0]] = 1
           } else{
               resultObj[id.split(' ')[0]]++
           }
        }
    }
    let result = Array(id_list.length).fill(0)

    for(const key in resultObj){
        result[id_list.indexOf(key)] = resultObj[key]
    }
    
    return result
    
    
}