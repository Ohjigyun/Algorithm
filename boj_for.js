//2739

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
for(let i = 1 ; i <= 9 ; i++){
    console.log(`${a} * ${i} = ${a*i}`)
}

//10950
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var a = parseInt(input[0]);
var arr = input.slice();
arr.shift()
for(let i = 0 ; i < a ; i++){
    console.log(`${parseInt(arr[i][0])+parseInt(arr[i][2])}`)
}

//8393
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
let result = 0
for(let i = 1 ; i <= a ; i++){
    result = result + i
}
console.log(result)


//15552
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer = '';
rl.on('line', line => {
  const input = line.split(' ');
    
  if(input.length === 2) {
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    answer += A+B + '\n';
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
})

//2741
let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer = '';

for (let i = 1; i <= input; i++) {
    answer += i + '\n';
}

console.log(answer);


//2742
let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer = '';

for (let i = input; i >= 1; i--) {
    answer += i + '\n';
}

console.log(answer);

//11021
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let num = 1;
let answer = '';
rl.on('line', line => {
  const input = line.split(' ');
    
  if(input.length === 2) {
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    answer += `Case #${num}: ${A+B}`+ '\n';
    num = num+1;
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
})  

//11022
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let num = 1;
let answer = '';
rl.on('line', line => {
  const input = line.split(' ');
    
  if(input.length === 2) {
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    answer += `Case #${num}: ${A} + ${B} = ${A+B}`+ '\n';
    num = num+1;
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
})  

//2438
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
let str = ''
let ans = ''
for(let i = 1 ; i <= a ; i++){
    str = str + "*"
    ans = ans + `${str}` + '\n'
}
console.log(ans)

//2439
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
let str = ''
let copy = ''
let ans = ''
for(let i = 1 ; i <= a ; i++){
    str = str +' '
}
let arr = str.split('')
for(let j = 1 ; j <= a ; j++){
    copy = arr.slice()
    copy.splice(a-j , j)
    for(let k = 1 ; k <= j ; k++){
        copy.push("*")
    }
    ans = ans + copy.join('') + '\n'
}
console.log(ans)


//10871
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var a = input[0].split(' ');
var b = input[1].split(' ');
let n = parseInt(a[0]);
let x = parseInt(a[1]);
let ans = '';
for(let i = 0 ; i < n ; i++){
    if(parseInt(b[i]) < x ){
        ans = ans + b[i] + ' '
    }
}

console.log(ans.slice(0,ans.length-1))