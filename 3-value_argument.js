/*
Write a script that prints the first argument passed to it:

If no arguments are passed to the script, print “No argument”
You must use console.log(...) to print all output
You are not allowed to use var
You are not allowed to use length
guillaume@ubuntu:~/0x12$ node 3-value_argument.js 
No argument
guillaume@ubuntu:~/0x12$ node 3-value_argument.js School
School
guillaume@ubuntu:~/0x12$ 
*/

const myVar = process.argv[2];
if (myVar === undefined) {
  console.log("No argument");
}
else {
    console.log(myVar);
}
