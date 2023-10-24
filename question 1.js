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
let counter2 = makeCounter();

counter1(); // 1
counter1(); // 2

counter2(); // 1
counter2(); // 2

{
    function makeCounterB(startFrom) {
        let currentCount = startFrom;
        return function() {
        currentCount++;
        console.log(currentCount)
        return currentCount;
        };
        }
        let counter3 = makeCounterB(5);
        counter3(); // 6
        counter3(); // 7
        counter3(); // 8

    function makeCounterC(startFrom, incrementBy) {
        let currentCount = startFrom;
        return function() {
        currentCount += incrementBy;
        console.log(currentCount)
        return currentCount;
        };
        }
        let counter4 = makeCounterC(10, 5);
        counter4(); // 15
        counter4(); // 20
    }