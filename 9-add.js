/* 
Write a script that prints the addition of 2 integers

The first argument is the first integer
The second argument is the second integer
You have to define a function with this prototype: function add(a, b)
You must use console.log(...) to print all output
You are not allowed to use var
guillaume@ubuntu:~/0x12$ node 9-add.js 
NaN
guillaume@ubuntu:~/0x12$ node 9-add.js 1
NaN
guillaume@ubuntu:~/0x12$ node 9-add.js 1 7
8
guillaume@ubuntu:~/0x12$ node 9-add.js 13 89
102
guillaume@ubuntu:~/0x12
*/

const myVar = process.argv[2];
const myVar2 = process.argv[3];
const myInt = parseInt(myVar);
const myInt2 = parseInt(myVar2);
function add(a, b) {
  return a + b;
}
if (myVar === undefined || myVar2 === undefined) {
  console.log("NaN"); // myVar 2 cannot be defined and myVar 1 undefined
}
else if (isNaN(myVar) || isNaN(myVar2)) {
  console.log("NaN"); // if one of the arguments is not a number
}
else {
  console.log(add(myInt, myInt2)); // if both arguments are numbers
}  // put a space between the two numbers for it to work.