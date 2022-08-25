// FUNCTION DECLARATIONS

 function greet(firstName = 'Bob', lastName = 'Barker') {
    // function scope
    // console.log('Hello!');
    return 'Hello ' + firstName + ' ' + lastName;
 }

 // call function
//  greet();
//  console.log(greet());

// FUNCTION EXPRESSIONS

const square = function(x) {
   return x*x;
};

// call function expression
console.log(square(5));