var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var na = parseInt(input[0]);
var a = input[0];
var nb = parseInt(input[1]);
var b = input[1];
var c = 0;
for(let i = 0 ; i <b.length ; i++){
    console.log(na*b[b.length-1-i])
    c = c + na*(b[b.length-1-i])*Math.pow(10,i)
}
console.log(c)