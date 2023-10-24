function printFibonacci() { //using setInterval
    let first = 1;
    let second = 1;
    console.log(first)
    console.log(second)
    setInterval(function printNext() {
    let next = first+second;
    console.log(next)
    first = second; //next time the interval runs,
    second = next; //first and second each move up the sequence
    }, 1000)
    }
    function printFibonacciTimeouts() { //using nested setTimeout
    let [first, second] = [1, 1]
    console.log(first)
    console.log(second)
    setTimeout(function printNext(first, second) {
    let next = first+second;
    console.log(next);
    //call the same function again with different argument values
    setTimeout(printNext, 1000, second, next);
    }, 1000, first, second);
    }
    function printFibonacciLimit(limit) {
    let first = 1;
    let second = 1;
    console.log(first)
    console.log(second)
    let counter = 2; //we already printed the first two numbers
    let intervalRef = setInterval(function printNext() {
    let next = first+second;
    console.log(next)
    first = second; //next time the interval runs,
    second = next; //first and second each move up the sequence
    
    counter++; //keep track of how many numbers we've printed
    
    if (counter == limit) clearInterval(intervalRef) //stop if we're at the limit
    }, 1000)
    }

    printFibonacciLimit(10); 