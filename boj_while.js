//10952
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var a = input[0].split(' ');
let x = parseInt(a[0]);
let y = parseInt(a[1]);
let num = 0
let ans = '';
while(x !==0 && y !== 0){
    ans += `${x+y}`+ '\n'
    num = num + 1
    a=input[num].split(' ');
    x = parseInt(a[0]);
    y = parseInt(a[1]);
}
console.log(ans)


//10951
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var a = input[0].split(' ');
let x = parseInt(a[0]);
let y = parseInt(a[1]);
let num = 0
let ans = '';
while(num<input.length-1){
    ans += `${x+y}`+ '\n'
    num = num + 1
    a=input[num].split(' ');
    x = parseInt(a[0]);
    y = parseInt(a[1]);
}
console.log(ans)

//1110
let input = Number(require('fs').readFileSync('/dev/stdin').toString());
let num = input;
let sum;
let i = 0;

while (true) {
    i++;

    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sum % 10; 

    if (input === num) {
	break;
    } 
}

console.log(i);