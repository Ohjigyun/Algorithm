function solution(s) {
    //x의 모든 0을 제거
    //0을 제거 한 후 1의 갯수(length) 를 이진 변환
    //이진 변환한 수를 x 로 설정
    //x가 1이 될때까지 반복
    let str = ''
    let cnt = 0
    let iter = 0
    while(s !== "1"){
        debugger;
        for(let i = 0 ; i < s.length ; i++){
            if(s[i] === "1"){
                str += "1"
            }else{
                cnt++
            }
        }
        s=str.length.toString(2)
        str= ''
        iter++
    }
    return [iter, cnt]
}