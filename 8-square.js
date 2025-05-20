/*
Write a script that prints a square

The first argument is the size of the square
If the first argument can’t be converted to an integer, print “Missing size”
You must use the character X to print the square
You must use console.log(...) to print all output
You are not allowed to use var
You must use a loop (while, for, etc.)
guillaume@ubuntu:~/0x12$ node 8-square.js
Missing size
guillaume@ubuntu:~/0x12$ node 8-square.js School
Missing size
guillaume@ubuntu:~/0x12$ node 8-square.js 2
XX
XX
guillaume@ubuntu:~/0x12$ node 8-square.js 6
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
guillaume@ubuntu:~/0x12$ node 8-square.js -3
guillaume@ubuntu:~/0x12$ 
*/ 

const size = process.argv[2]; // size is the first argument. Collects the first argument passed to the script
if (size === undefined) {
  console.log("Missing size");
}
else if (isNaN(size)) {
  console.log("Missing size");
}
else {
  const myInt = parseInt(size);
  if (myInt <= 0) // checks if the integer is less than or equal to 0 <=(is less than or equal to)
    {console.log("Missing size"); // if the integer is less than or equal to 0, print "Missing size"
  }
  else {
    let i = 0;
    while (i < myInt) { // iterates through the integer to print a row of X's
      let j = 0;
      let str = "";
      while (j < myInt) {// iterates through the integer to print a column of X's
        str += "X";
        j++;
      }
      console.log(str); //calls the fxn to print the string
      i++;
    }
  }
}