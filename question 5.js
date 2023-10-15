/*5. The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why?*/

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};
//car.description(); //works
//setTimeout(car.description, 200); //fails

 
//a) Fix the setTimeout call by wrapping the call to car.description() inside a function

setTimeout(function () {car.description();}, 200);

// b) Change the year for the car by creating a clone of the original and overriding it

let newCar = Object.assign({}, car); // Create a clone of the original car
newCar.year = 2023; // Override the year


//c) Does the delayed description() call use the original values or the new values from b)? Why?

//still uses original values as 'this' method refers to the 'car' object. the value doesnt change even when it is cloned

//d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function

car.description = car.description.bind(car); // Bind the method to the car object

//car.description(); 
//setTimeout(car.description, 200); 

//e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)

newCar.make = "Ferrari"; // Override the make property in the clone

//car.description(); // Works, still uses the original car's properties
setTimeout(car.description, 200); // Works, still uses the original car's properties
