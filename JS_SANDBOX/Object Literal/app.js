// Object literal
const person = {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 22,
    email: 'bob@gmail.com',
    hobbies: ['Golf', 'Reading', 'Working Out'],
    address: {
        city: 'Charlotte',
        state: 'NC'
    },
    getBirthYear: function name(params) {
        return 2000;
    }
};

let val;

val = person;

// Get specific value
val = person.firstName; // Recommended 
val = person['firstName']; // Alternative
console.log(val);