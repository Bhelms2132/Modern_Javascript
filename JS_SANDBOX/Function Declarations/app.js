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
// console.log(square(5));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFES

// (function(name) {
//    (console.log('Hello ' + name);
// })('Bob');

// PROPERTY METHODS

const todo = {
   add:  function() {
      console.log('Add todo..');
   },
   edit: function(id) {
      console.log(`Edit todo ${id}`);
   }
};

todo.delete = function() {
   console.log('Delete todo..');
};

todo.add();
todo.edit('Next');
todo.delete();