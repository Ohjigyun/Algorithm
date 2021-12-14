//1712
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);
let ans;
for(let i = 1; i <= 2100000000; i++){
    if((a+i*b) < c*i){
        ans = i
        break;
    }
}

if(ans!== undefined){
    console.log(ans)
}else{
    console.log(-1)
}
