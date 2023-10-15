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


function printFibonacci() {
  let a = 0, b = 1;

  const fibonacciInterval = setInterval(() => {
    console.log(a);
    const next = a + b;
    a = b;
    b = next;
  }, 1000); // Output a new number every second

  //  use a counter and clearInterval to stop after a certain number of terms,.
  // For example, stop after 10 terms:
  let counter = 0;
  const limit = 10;
  if (limit) {
    clearInterval(fibonacciInterval);
  }
}

printFibonacci();


//b 

function printFibonacciTimeouts() {
  let a = 0, b = 1;
  let counter = 0;
  const limit = 10; // Set a limit for the number of terms to print

  function printNext() {
    console.log(a);
    const next = a + b;
    a = b;
    b = next;
    counter++;

    if (counter < limit || !limit) {
      setTimeout(printNext, 1000); // Output a new number every second
    }
  }

  printNext();
}

printFibonacciTimeouts();

//c 

function printFibonacci(limit) {
  let a = 0, b = 1;
  let counter = 0;

  const fibonacciInterval = setInterval(() => {
    console.log(a);
    const next = a + b;
    a = b;
    b = next;
    counter++;

    if (limit && counter >= limit) {
      clearInterval(fibonacciInterval);
    }
  }, 1000); // Output a new number every second , as numbers in millisecond
}

printFibonacci(10); // Specify the limit as 10, for example
