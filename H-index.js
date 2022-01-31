function solution(citations) {
    const sortedCitations = citations.sort((a,b) => a-b);
    const n = citations.length;
    if(citations.filter(el => el === citations[0]).length ===n) return 0
    let count;
    let iter = 0;
    let idx;
    while(true){
        idx = sortedCitations.findIndex(el=> el >= iter)
        if(idx!== -1){
            count = n-idx;
            if(count < iter){
                break;
            }            
            iter++
        }
    }
    return iter - 1
}