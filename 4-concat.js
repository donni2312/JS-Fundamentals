/*      Write a script that prints two arguments passed to it, in the following format: “ is ”

You must use console.log(...) to print all output
You are not allowed to use var
guillaume@ubuntu:~/0x12$ node 4-concat.js c cool
c is cool
guillaume@ubuntu:~/0x12$ node 4-concat.js c
c is undefined
guillaume@ubuntu:~/0x12$ node 4-concat.js
undefined is undefined
guillaume@ubuntu:~/0x12$
*/

const myVar1 = process.argv[2];
const myVar2 = process.argv[3];
if (myVar1 === undefined) {
  console.log("undefined is undefined");
}// you can't have myVar2 defined and myVar1 undefined
else if (myVar2 === undefined) {
  console.log(myVar1 + " is undefined");
}
else {
  console.log(myVar1 + " is " + myVar2);
}