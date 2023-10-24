//7. In JavaScript, the toString method is used to convert an object to a string representation. By default, when an object is converted to a String, it returns a string that looks something like [object Object]. However, we can define our own toString methods for custom objects to provide a more meaningful string representation.

//a) Define a custom toString method for the Person object that will format and print their details

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  
    // Custom toString method for Person
    Person.prototype.toString = function () {
      return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
    };
  }
  
  const person1 = new Person('James Brown', 73, 'male');
  console.log('person1: ' + person1);
  

//b) Test your method by creating 2 different people using the below constructor function and printing them

const person2 = new Person('Alice Smith', 28, 'female');
console.log('person2: ' + person2);

const person3 = new Person('Momo', 28, 'male');
console.log('person2: ' + person3);

//c) Create a new constructor function Student that uses call to inherit from Person and add an extra property cohort

function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort;
  
}
//d) Add a custom toString for Student objects that formats and prints their details. Test with 2 students.

 // Custom toString method for Student
 Student.prototype.toString = function () {
    return `${this.name} is  a ${this.age} year old ${this.gender} student in the ${this.cohort} cohort`;
  };


const student1 = new Student('John Doe', 20, 'male', 'Cohort A');
const student2 = new Student('Jane Smith', 22, 'female', 'Cohort B');

console.log('student1: ' + student1);
console.log('student2: ' + student2);