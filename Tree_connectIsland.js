function find(parent, x){
    if(parent[x] === x ) { // 부모와 원소가 같다 === 최상의 원소
        return x;
    }
    
    return parent[x] = find(parent, parent[x])
}

function union(parent, a, b){
    a = find(parent, a );
    b = find(parent, b );
    if( a < b ){
        parent[b] = a ;
    }else {
        parent[a] = b ;
    }
}
//두 원소가 같은 집합인지를 검사함
function compare(parent, a ,b){ 
    a = find(parent, a);
    b = find(parent, b);
    return a === b;
}

function solution(n, costs) {
    let answer = 0;
    const sortedCosts = costs.sort((a,b) => a[2] - b[2]);
    const parent = Array.from({ length: n } , (_,i) => i);
    
    for(const [a,b,cost] of sortedCosts){ 
        if(!compare(parent, a,b)){ // 두 원소가 같은 집합이라면 cycle
            answer += cost;
            union(parent , a, b);
        }
    }
    return answer
}