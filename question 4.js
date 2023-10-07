/* 
4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.

a) Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second.

b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing

c) Extend one of the above functions to accept a limit argument, which tells it how many
numbers to print before stopping. */

//a 

function printFibonacci(number) {return number % 2; }
function getFibonacci() {
    return [].filter.call(arguments, printFibonacci);
}
let a = 0;
let b = 0+a;
let c = a+b;
let results = getFibonacci (),
console.log(results);
{
let printFibonacci = setInterval( () => console.log(printFibonacci), 1000 ) // 'tick' every 1s

}

