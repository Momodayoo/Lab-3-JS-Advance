//Use the Function prototype to add a new delay(ms) function to all functions, which can be used to delay the call to that function by ms milliseconds.

function multiply(a, b) {
    console.log( a * b );
}

//multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
//a) Use the example multiply function below to test it with, as above, and assume that all delayed functions will take two parameters

Function.prototype.delay = function (ms) {
    const func = this;
    return function (...args) {
      setTimeout(() => {
        func.apply(null, args);
      }, ms);
    };
  };
   
  multiply.delay(200)(5, 5); // prints 25 after 500 milliseconds
  


//b) Use apply to improve your solution so that delayed functions can take any number of parameters

Function.prototype.delay = function (ms) {
    const func = this;
    return function (...args) {
      setTimeout(() => {
        func.apply(null, args);
      }, ms);
    };
  };
  
  function multiply(a, b) {
    console.log(a * b);
  }
  
  multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
  
  function add(a, b, c) {
    console.log(a + b + c);
  }
  
  add.delay(1000)(1, 2, 3); // prints 6 after 1000 milliseconds
  

//c) Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.

Function.prototype.delay = function (ms) {
    const func = this;
    return function (...args) {
      setTimeout(() => {
        func.apply(null, args);
      }, ms);
    };
  };
  
  function multiply(a, b, c, d) {
    console.log(a * b * c * d);
  }
  
  multiply.delay(1500)(2, 3, 4, 5); // prints 120 after 1500 milliseconds
  