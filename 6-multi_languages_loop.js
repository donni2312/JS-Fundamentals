/*
Write a script that prints 3 lines: (like 1-multi_languages.js) but by using an array of string and a loop

The first line: “C is fun”
The second line: “Python is cool”
The third line: “JavaScript is amazing”
You must use console.log(...) to print all output
You are not allowed to use var
You are not allowed to use any if/else statement
You can use only one console.log
You must use a loop (while, for, etc.)
guillaume@ubuntu:~/0x12$ node 6-multi_languages_loop.js 
C is fun
Python is cool
JavaScript is amazing
guillaume@ubuntu:~/0x12$ 
*/

const myArray = ["C is fun", "Python is cool", "JavaScript is amazing"];
const myVar = myArray[0] + '\n' + myArray[1] + '\n' + myArray[2];
console.log(myVar);
