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
        return 2022 - this.age;
    }
};

let val;

val = person;

// Get specific value
val = person.firstName; // Recommended 
val = person['lastName']; // Alternative
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.getBirthYear();

console.log(val);

// Array with multiple Objects
const people = [
    {name: 'Mike', age: 45},
    {name: 'Tom', age: 25},
    {name: 'Matt', age: 35}
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].age);
}