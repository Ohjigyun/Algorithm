class Queue {
    constructor(){
        this.queue= [];
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(value){
        this.queue[this.rear++] = value;
    }
    
    dequeue(){
        const value = this.queue[this.front];
        delete this.queue[this.front]
        this.front ++
        return value;
    }
    
    peek(){
        return this.queue[this.front];
    }
    
    size(){
        return this.rear - this.front;
    }
}


function solution(priorities, location) {
    const queue = new Queue();
    for(let i = 0 ; i < priorities.length ; i++){
        queue.enqueue([priorities[i] , i])
    }
    
    priorities.sort((a,b)=>b-a)
    
    let cnt = 0;
    
    while(true){
        const currentValue = queue.peek()
        if( currentValue[0] < priorities[cnt]){
            queue.enqueue(queue.dequeue())
        }else{
            const value = queue.dequeue()
            cnt++
            if(location === value[1]){
                return cnt
            }
        }
    }
}