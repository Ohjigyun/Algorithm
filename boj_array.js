//10818
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = input[0]
let b = input[1].split(' ');
b.sort((a,b)=> b-a);
console.log(`${b[0]} ${b[b.length-1]}`)


//2562
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let arr = input.slice()
arr.sort((a,b)=>b-a)
console.log(`${arr[0]} ${input.indexOf(arr[0])+1}`)

//2577
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);
let num = a * b * c;
let str = num.toString().split('');
let cnt=0;
let ans='';
for(let i = 0 ; i <= 9; i++){
    for(let j = 0 ; j < str.length ; j++){
        if(`${i}` === str[j]){
            cnt++
        }
    }
    ans = ans + `${cnt}`+"\n"
    cnt = 0
}
console.log(ans)

//3052
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let arr = [];
for(let i = 0 ; i < 10 ; i++){
    if(!arr.includes(`${parseInt(input[i])%42}`)){
        arr.push(`${parseInt(input[i])%42}`)
    }
}
console.log(arr.length)

//1546
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = parseInt(input[0])
let arr = input[1].split(' ');
arr.sort((a,b)=> b-a);
let newArr = [];
for(let i = 0 ; i <n ; i++){
        newArr.push(parseInt(arr[i])/parseInt(arr[0])*100)
}
let sum = newArr.reduce((acc,cur)=> acc+cur);
console.log(sum/newArr.length)

//8958
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = parseInt(input[0])
let ans = '' ;
let temp = 0;
let num =0 ;
for(let i = 1 ; i <= n ; i++){
    for(let j = 0 ; j < input[i].length ; j++){
        if(input[i][j] === 'X'){
            temp = 0 ;
        }else if(input[i][j] === 'O'){
            temp ++
            num = num + temp
        }
    }
    ans = ans + `${num}` + '\n'
    num = 0;
    temp = 0;
}
console.log(ans)

//4344
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
for(let i = 1 ; i<= +input[0]; i++){
    let arr = input[i].split(' ').map(el=>+el);
    let n = arr.shift();
    let mean = arr.reduce((acc,cur)=>acc+cur) /n;
    let cnt = arr.filter(el=>el > mean).length;
    console.log(`${(cnt/n*100).toFixed(3)}%`);
}