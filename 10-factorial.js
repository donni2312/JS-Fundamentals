/* 
Write a script that computes and prints a factorial

The first argument is integer (argument can be cast as integer) used for computing the factorial
Factorial of NaN is 1
You must do it recursively
You must use a function
You must use console.log(...) to print all output
You are not allowed to use var
guillaume@ubuntu:~/0x12$ node 10-factorial.js 
1
guillaume@ubuntu:~/0x12$ node 10-factorial.js 3
6
guillaume@ubuntu:~/0x12$ node 10-factorial.js 89
1.6507955160908452e+136
guillaume@ubuntu:~/0x12$ node 10-factorial.js 333
Infinity
guillaume@ubuntu:~/0x12$ 
*/

const myVar = process.argv[2];
const myInt = parseInt(myVar);
function factorial(n) {
  if (n < 0) {
    return 1; // Factorial of negative numbers is not defined
  }
  if (n === 0 || n === 1) {
    return 1;   // Base case: factorial of 0 or 1 is 1
  }
  return n * factorial(n - 1); // Recursive case formular for factorial: n! = n * (n-1)!
}

if (myVar === undefined) {
  console.log(1); // Factorial of NaN is 1
}
else if (isNaN(myVar)) {
  console.log(1); // Factorial of NaN is 1
}
else if (myInt < 0) {
  console.log(1); // Factorial of negative numbers is not defined
}
else {
  console.log(factorial(myInt)); // If the argument is a number, print the factorial
}