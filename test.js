let sayHi = function sayHiFunc(who) { // NFE, internal name can be used below
    if (who) {
    console.log(`Hi, ${who}!`);
    } else {
    sayHiFunc('guest') // no more errors here
    }
    }
    sayHi('David') // works, prints Hi, David!
    const guestWelcome = sayHi
    guestWelcome() // works, prints Hi, guest!
    sayHi = null
    guestWelcome() // works, prints Hi, guest! because the NFE reference still exists

    {
        function sayHi() {
        console.log('Hi');
        sayHi.counter++; // increment the custom counter property every time the function is called
        }
        sayHi.counter = 0 // initialise the counter to 0 before calling it
        sayHi() // Hi - calls the function and increments the counter
        sayHi() // Hi - calls the function and increments the counter again
        console.log( `Called ${sayHi.name} ${sayHi.counter} times` ) // Called sayHi 2 times
    }

    