// 구조 분해 할당을 이용한 변수 swap

let a = 5 , b = 10;
[a, b] = [b, a]
// 5 , 10 = 10, 5

// 배열 내 같은 요소 제거

const arr = [1,2,3,1,2];
const uniqueArr = arr.filter((el, idx) =>{
	return arr.indexOf(el) === idx;
});

// 스프레드로 객체 병합

const a = { ~~ }
const b = { ~~ }
const c = { …a , …b}
//병합시에 같은 키는 마지막에 대입된 value 로 정한다.

// &&와 || 의 활용

// ||는 디폴트 값을 넣기위해 사용할 수 있다.
// const name = participantName || 'Guest' 사용시 0, undifined, 빈 문자열 , null이면 Guest 할당

// 구조분해 할당으로 객체에서 꺼내쓰기

const person = {
	name: "Glenn",
	familyName : "Oh"
}
const { name, givenName } = person  // name 과 givenName을 할당해 사용가능

// function을 이용한  arr 생성이 가능

const arr = Array.from(Array(5) , function(v, k){ return k+1 }) 
//[1,2,3,4,5] = Array.from(Array(5), (_,k)=>k+1)

// !!를 사용해 boolean 값
// 0, null , 빈 문자열, undefined, NaN 은 false 로 , 그 외에는 true로 변경할 수 있음.

// 최대공약수 (유클리드 호제법)
function gcd(m, n) {
  if (m % n === 0) return n;
  return gcd(n, m % n);
}

// 인접행렬 만들기
const result = new Array(max + 1).fill(0).map((row) => new Array(max + 1).fill(0));
const graph = Array.from(Array(5), ()=> Array(5).fill(false))
  

// 알파벳 배열 만들기
const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));


// 객체의 밸류값으로 정렬하기
const obj = {}
let sort = Object.entries(obj).sort(([,a], [,b])=>b-a)

// 큐 구현 (shift 나 splice보다 월등히 빠름 )

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

// 힙 구현

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


// 이진 탐색 구현

function binarySearch(array, findValue){
    let left = 0;
    let right = array.length -1 ;
    let mid = Math.floor((left + right ) /2);
    while(left < right){
        if(array[mid] === findValue){
            return mid ;
        }

        if(array[mid] < findValue){
            left = mid + 1 ;
        } else {
            right = mid - 1;
        }

        mid = Math.floor((left + right ) /2);
    }

    return -1;
}