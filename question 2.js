/* The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
a) What order will the four tests below print in? from no rule to 100ms Why? no rule has no rule applied; 0ms fster than 100ms
b) Rewrite delayMsg as an arrow function
c) Add a fifth test which uses a large delay time (greater than 10 seconds)
d) Use clearTimeout to prevent the fifth test from printing at all.
function delayMsg(msg) */


function delayMsg(msg)
{
    console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg( () => console.log("This message will be printed after a delay: {no delay}"),);

let fifthTimerRef = setTimeout (delayMsg, 10*1000, '5th longest delay')
clearTimeout( fifthTimerRef)


