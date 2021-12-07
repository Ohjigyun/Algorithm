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
