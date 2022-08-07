let val;

// Number to String
val = String(5);   // Outputs 5, string, 1
val = String(5+5); // Outputs 10, string, 2


// Boolean to String
val = String(true); // Outputs true, string, 4

// Date to String
val = String(new Date()); // Outputs Current date, string, 57-length of current date 

// Array to String
val = String([1,2,3,4,5]); // Outputs 1,2,3,4,5, string, 9

// toString()
val = (5).toString();   // Outputs 5, string, 1
val = (true).toString(); // Outputs true, string, 4


// String to Number
val = Number('5'); // Outputs 5, number, 5

// Boolean to Number
val = Number(true); // Outputs 1, number, 1
val = Number(false); // Outputs 0, number, 0
val = Number(null); // Outputs 0, number, 0

// NaN Outputs
val = Number('Hello'); // Outputs NaN, number, NaN
val = Number([1,2,3,4]); // Outputs NaN, number, NaN
                          
val = parseInt('100.49'); // Outputs 100, number, 100
val = parseFloat('100.49'); // Outputs 100.49, number, 100


// Output
console.log(val);        
console.log(typeof val); 
// console.log(val.length); 
console.log(val.toFixed()); // If you want a number with decimal add a number to get that many decimal points ie toFixed(2)
 
// TYPE COERCION

const val1 = 5;
const val2 = 6;
const sum = val1 + val2; // Outputs 11, number

const val3 = '4';
const val4 = 2;
const tol = val3 + val4; // Outputs 42 "42 as a string not number", string

//Output
console.log(sum);
console.log(typeof sum);

console.log(tol);
console.log(typeof tol);