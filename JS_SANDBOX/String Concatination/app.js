const firstName = 'John';
const lastName = 'Doe';
const age = 45;
const str = 'Hello, My name is Bob';
const tags = 'Web design, UI, Web developer, UX';

let val;

val = firstName + lastName;

// Concatenation ' '
val = firstName + ' ' + lastName;
val = 'Hello, my name is ' + firstName + ' and I am ' + age + ' years old.';

// Append += 
val = 'Bob ';
val += 'Smith';

// Escaping \
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// indexOf()
val = firstName.indexOf('o');
val = firstName.lastIndexOf('h');

// charAt()
val = firstName.charAt('3');

// Get last char
val = firstName.charAt(firstName.length -1);

//substring() 
val = firstName.substring(0, 2);

// slice ()
val = firstName.slice(0,2);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Bob', 'Steve');

// includes()
val = str.includes('is'); // true
val = str.includes('Hi'); // false



console.log(val);