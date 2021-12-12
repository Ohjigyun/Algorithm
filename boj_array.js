//10818
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = input[0]
let b = input[1].split(' ');
b.sort((a,b)=> b-a);
console.log(`${b[0]} ${b[b.length-1]}`)
