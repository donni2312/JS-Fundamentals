/* Write a script that prints a message depending of the number of arguments passed:

If no arguments are passed to the script, print “No argument”
If only one argument is passed to the script, print “Argument found”
Otherwise, print “Arguments found”
You must use console.log(...) to print all output
You are not allowed to use var
Reference: process.argv

guillaume@ubuntu:~/0x12$ node 2-arguments.js 
No argument
guillaume@ubuntu:~/0x12$ node 2-arguments.js Best
Argument found
guillaume@ubuntu:~/0x12$ node 2-arguments.js Best School
Arguments found
guillaume@ubuntu:~/0x12$ 
*/

let myVar = process.argv.length - 2;
if (myVar === 0) {
  console.log("No argument");
}
else if (myVar === 1) {
    console.log("Argument found");
    }
else {
    console.log("Arguments found");
}