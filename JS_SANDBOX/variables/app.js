// Variables var, let, const

// Declaring a variable using var, var allows you to reassign variables
// var name = 'John Doe';
// console.log(name);
// name = 'Bob';
// console.log(name);

//  Init var dose'nt set the value to anything
// var greeting; // Will show as undefined in the console typically used in if statements
// console.log(greeting);
// greeting = 'Hello!';
// console.log(greeting);

//  letters, numbers, _, $ all can be used to create a variable
//  Variables can't start with a number will log 'Invalid or unexpected token'

//  Multi word vars
// var firstName = 'John Doe'; // Camel case
// var first_name = 'Sara';   // Underscore typically used in php
// var FirstName = 'Bob';    // Pascal case recommend for ES6 classes


// LET
// let name; // Initialize variable as undefined
// name = 'John Doe'; // Allows you to create a variable
// console.log(name);
// name = 'Bob'; // Can reassign a variable 
// console.log(name);

// CONST
// const name = 'John'; // constant variable created
// console.log(name);  // log name 'John'
// name = 'Bob'; // Can't reassign a const variable will get an error in the console
// Have to assign a value, can't create an empty variable such as the following
// const greeting; // Will get the following error in the console 'Missing initializer in const declaration'

// Object
const person = {
    name: 'John',
    age: 45,
    gender: 'Male'
};

// Can mutate/change info that is in person object just not the person variable
person.name = 'Sara';
person.age = 32;
person.gender = 'Female';

console.log(person);

// Array
const number = [1,2,3,4,5,6,7,8,9,10];
number.push(11,12); // Adds to the array
console.log(number);
