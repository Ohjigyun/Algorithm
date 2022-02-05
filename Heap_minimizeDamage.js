// 최대 힙
class Heap {
    constructor() {
        this.heap = [null];
    }

    push(value){
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        while(parentIndex !== 0 && this.heap[parentIndex] < value) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = temp;

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex /2);
        }
    }

    pop(){
        if(this.heap.length === 2) return this.heap.pop();
        
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        while(this.heap[currentIndex] < this.heap[leftIndex] || this.heap[currentIndex] < this.heap[rightIndex]){
            if(this.heap[leftIndex] < this.heap[rightIndex]){
                const temp= this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[rightIndex]
                this.heap[rightIndex] = temp;
                currentIndex = rightIndex
            }else{
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[leftIndex];
                this.heap[leftIndex] = temp;
                currentIndex = leftIndex;
            }
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }
        return returnValue;
    }
}
/* 최소힙

class Heap {
    constructor() {
        this.heap = [null];
    }

    push(value){
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        while(parentIndex !== 0 && this.heap[parentIndex] > value) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = temp;

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex /2);
        }
    }

    pop(){
        if(this.heap.length === 2) return this.heap.pop();
        
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        while(this.heap[currentIndex] > this.heap[leftIndex] || this.heap[currentIndex] > this.heap[rightIndex]){
            if(this.heap[leftIndex] > this.heap[rightIndex]){
                const temp= this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[rightIndex]
                this.heap[rightIndex] = temp;
                currentIndex = rightIndex
            }else{
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[leftIndex];
                this.heap[leftIndex] = temp;
                currentIndex = leftIndex;
            }
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }
        return returnValue;
    }
}

*/


function solution(no, works) {
    //구현해놓은 힙에 works를 모두 푸쉬
    //반복을 통해 no가 -1할때마다 최대힙 제거, 그 값에 -1해 푸쉬
    //no가 작업을 종료하는데 충분하다면 배상을 하지 않는다.
    if(works.reduce((acc,cur)=>acc+cur) <= no){
        return 0
    }
    const heap = new Heap();
    for(let i = 0 ; i < works.length; i++){
        heap.push(works[i])
    }
    
    for(let i = 0 ; i< no ; i++){
        heap.push(heap.pop() -1);
    }
    
    const result = heap.heap.reduce((acc,cur)=>acc+cur*cur)
    
    return result
}