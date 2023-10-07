/*makeCounter below is a decorator function which creates and returns a function that
increments a counter.
a) Create a second counter counter2 using the makeCounter function and test to see if
it remains independent to counter1
b) Modify makeCounter so that it takes an argument startFrom specifying where the
counter starts from (instead of always starting from 0)
c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by.*/



function makeCounter() {
    let currentCount = 0;

    return function() {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}

let counter1 = makeCounter();

counter1(); // 1
counter1(); // 2

{
    function makeCounter() {
        let startFrom = 2;
    
        return function() {
            startFrom++;
            console.log(startFrom)
            return startFrom;
        };
    }
    
    let counter2 = makeCounter();
    
    counter2(); // 1
    counter2(); // 2
}
{
    function makeCounter() {
        let incrementBy = 4;
    
        return function() {
            incrementBy++;
            console.log(incrementBy)
            return incrementBy;
        };
    }
    
    let counter3 = makeCounter();
    
    counter3(); // 1
    counter3(); // 2
}