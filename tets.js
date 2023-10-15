const sayHi = function(who) { // function reference variable is sayHi, function itself is unnamed
    console.log(`Hi ${who}`);
    }
    console.log(`Name of function ${sayHi.name} is inferred from context`)