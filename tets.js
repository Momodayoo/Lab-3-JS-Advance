function sayHi() {
    console.log('Hi');
    sayHi.counter++; // increment the custom counter property every time the function is called
    }
    sayHi.counter = 4 // initialise the counter to 0 before calling it
    sayHi() // Hi - calls the function and increments the counter
    sayHi() // Hi - calls the function and increments the counter again
    console.log( `Called ${sayHi.name} ${sayHi.counter} times` ) // Called sayHi 2 times