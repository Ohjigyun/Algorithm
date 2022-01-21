function solution(number, k) {
    const stack = []
    let cnt = 0;
    
    for(const item of number){
        while(cnt < k && stack[stack.length -1] < item){
            stack.pop();
            cnt++
        }
        stack.push(item)
    }
    while(cnt < k ){
            stack.pop();
            cnt++
        }
    
    return stack.join('')
}