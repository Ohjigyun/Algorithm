//1330

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
if(a>b) console.log(">");
if(a<b) console.log("<");
if(a===b) console.log("==");


//9498
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
if(a<= 100 && a >= 90) console.log("A");
if(a< 90 && a >= 80) console.log("B");
if(a< 80 && a >= 70) console.log("C");
if(a< 70 && a >= 60) console.log("D");
if(a< 60) console.log("F");


//2753
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
if(a%400 === 0){
    console.log("1");
}else if(a%4 === 0 && a%100 === 0){
    console.log("0")
}else if(a%4 === 0){
    console.log("1")
}else{
    console.log("0")
}

//14681

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const x = input[0];
  const y = input[1];

  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else if (x > 0 && y < 0) {
    console.log(4);
  }
  process.exit();
});

//2884

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
if(a === 0 && b < 45){
    console.log(`23 ${b+15}`)
}else if(b<45){
    console.log(`${a-1} ${b+15}`)
}else{
    console.log(`${a} ${b-45}`)
}