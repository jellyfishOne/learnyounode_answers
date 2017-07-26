/*
write a program that accepts one or more numbers as comman-line
arguments and prints the sum of those numbers to the console
*/

//length of the array
var length = process.argv.length;
//save sum of input
var sum = 0;

//traverse array
for(var i = 2; i < length; i++){
  sum += Number(process.argv[i]);
}

//print sum
console.log(sum);
