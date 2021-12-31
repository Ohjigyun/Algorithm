class Queue {
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0
    }
    
    enqueue(value){
        this.queue[this.rear++]= value
    }
    
    dequeue(){
        const value = this.queue[this.front]
        delete this.queue[this.front]
        this.front++
        return value
    }
    
    isEmpty(){
        return this.front === this.rear
    }
}

function solution(n, computers) {
    //인접 리스트 만들기
    const graph = Array.from(Array(n), ()=>[]);
    for(let i = 0 ; i < computers.length ; i++){
        for(let j = 0 ; j < computers[i].length ; j++){
            if(i!==j && computers[i][j] === 1){
                graph[i].push(j)
            }
        }
    }
    const queue = new Queue();
    const isVisit = Array.from(Array(n), ()=>false);
    let cnt = 0;
    for(let i = 0 ; i < n ; i++){
        if(isVisit[i] === false){
            queue.enqueue(i)
            isVisit[i] = true
            while(!queue.isEmpty()){
                for(const computer of graph[queue.dequeue()]){
                    if(!isVisit[computer]){
                        queue.enqueue(computer)
                        isVisit[computer] = true
                    }
                }
            }
            cnt++
        }
        
    }
    return cnt
}