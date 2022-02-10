//boj 4963 섬의 갯수
/*
정사각형으로 이루어져 있는 섬과 바다 지도가 주어진다. 섬의 개수를 세는 프로그램을 작성하시오.



한 정사각형과 가로, 세로 또는 대각선으로 연결되어 있는 사각형은 걸어갈 수 있는 사각형이다. 

두 정사각형이 같은 섬에 있으려면, 한 정사각형에서 다른 정사각형으로 걸어서 갈 수 있는 경로가 있어야 한다. 지도는 바다로 둘러싸여 있으며, 지도 밖으로 나갈 수 없다.
*/

const solution = () =>{
    let count = 0 ;
    [w, h] = input.shift().split(' ').map(number => Number(number))
    
    //00이면 종료
    if( w === 0 && h === 0 ){
        return ;
    }else if(w === 1 && h === 1 ){
        count = Number(input.shift());
    }else{
        assignment(h, w);
        for(let i = 0 ; i < h ; i++){
            for(let j = 0 ; j < w ; j++){
                //방문하지 않은 노드에만 dfs
                if(graph[i][j] === 1){
                    DFS(i,j);
                    count ++
                }
            }
        }
    }
}

const assignment = (h, w) =>{
    graph = Array.from(Array(h), ()=> Array(w).fill(0));
    for(let i = 0 ; i < h ; i++){
        //input의 한줄을 그래프에 넣기
        let temp = input[i].split(' ').map(number => Number(number));
        graph[i] = temp;
    }
    input = input.slice(h)
}

const DFS = (i , j)=>{
    if(RangeCheck(i , j) && graph[i][j] === 1){
        //현재 위치한 장소에 0을 넣어 방문처리
        graph[i][j] = 0;
        //상하좌우 펌프자리까지 확인
        for(let k = 0 ; k < move_x.length ; k++){
            DFS(i + move_x[k] , j + move_y[k]);
        }
    }
}

const RangeCheck = (i , j)=>{
    if(i >= 0 && i < h && j >= 0 && j < w){
        return true;
    }else {
        return false;
    }
}

const { group } = require('console');
const readline = require('readline');
const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
})
let input = [];
let graph = [];
let [w,h] = [0];
let move_x = [-1, 1 , 0 , 0 , -1 , -1 , 1 , 1 ];
let move_y = [0 , 0 , -1 , 1 ,-1 , 1 , -1 ,1];
rl.on('line', function(line){
    //input이 여러줄일때의 처리
    input.push(line);
}).on('close' , function(){
    //입력값을 처리 , 배열이 없어질때까지 반복
    while(input.length > 0 ){
        solution();
        //수행시마다 초기화
        graph.length = 0;
    }
    process.exit();
})