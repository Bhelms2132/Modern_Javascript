// Create some arrays
const numbers = [57,84,3,40,29];
const numbers2 = new Array(94,54,2,56,6);
const fruit = ['Apple', 'Orange', 'Blueberry', 'Strawberry'];
const mixed = [4, 'Hello', true, undefined, null, {a:2, b:2}, new Date()];

let val;

// Get Array
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[1];
// Insert into array
numbers[5] = 99;
//  Find index of value
val = numbers.indexOf(29);

//MUTATING ARRAYS
// Add on to end
numbers.push(21);
// Add on to front
numbers.unshift(44);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1,2);
// Reverse
numbers.reverse();

console.log(numbers);
console.log(val);