// var, let, const

// Declaring a variable using var, var allows you to reassign variables
var name = 'John Doe';
console.log(name);
name = 'Bob';
console.log(name);

// Init var dose'nt set the value to anything
var greeting; // Will show as undefined in the console typically used in if statements
console.log(greeting);
greeting = 'Hello!';
console.log(greeting);

// letters, numbers, _, $ all can be used to create a variable
// Variables can't start with a number will log 'Invalid or unexpected token'

// Multi word vars
var firstName = 'John Doe'; // Camel case
var first_name = 'Sara';   // Underscore typically used in php
var FirstName = 'Bob';    // Pascal case recommend for ES6 classes
