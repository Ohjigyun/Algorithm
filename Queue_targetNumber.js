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
    
    size(){
        return this.rear - this.front
    }
}

function solution(numbers, target) {
    const queue = new Queue()
    let temp1 = numbers.shift();
    queue.enqueue(temp1)
    queue.enqueue(-temp1)
    let temp2 ;
    while(numbers.length > 0){
        temp1 = numbers.shift()
        const len = queue.size()
        for(let i = 0 ; i < len; i++){
            temp2 = queue.dequeue()
            queue.enqueue(temp1+temp2)
            queue.enqueue(temp2-temp1)
        }
    }
    return queue.queue.filter(el=> el === target).length
}

/*
재귀
function solution(numbers, target) {
    let answer = 0;
    getAnswer(0,0);
    function getAnswer(x,value) {
        if(x<numbers.length){
            getAnswer(x+1,value + numbers[x]);
            getAnswer(x+1,value - numbers[x]);
        } else{
            if(value === target){
                answer++
            }
        }
    }
    return answer;
}
*/