// if(something){
//     do something
// } else {
//     do something else

// };

const id = 100;

// EQUAL TO VALUE
// if(id == 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// NOT EQUAL TO VALUE
// if(id != 100){
//     console.log('Correct');
// }else {
//     console.log('Incorrect');
// }

// EQUAL TO VALUE & TYPE
// if(id === 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// NOT EQUAL TO VALUE & TYPE
// if(id !== 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// Test if undefined 
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID');
// }

// GREATER OR LESS THAN
// if(id <= 100){
//     console.log('True');
// } else {
//     console.log('False');
// }

// IF ELSE STATEMENT
let color = 'Green';

// if(color === 'Red'){
//     console.log('Color is Red');
// } else if(color === 'Blue') {
//     console.log('Color is Blue');
// } else {
//     console.log('Color is not Red or Blue');
// }

// LOGICAL OPERATORS

const name = 'Steve';
const age = 28;

// && represents logical AND 
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 20){
    console.log(`${name} is under 21`);
} else {
    console.log(`${name} is over 21`);
}

// || represents OR logical expression

if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}