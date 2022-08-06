let val;

// Number to String
val = String(5); // Outputs 5, string, 1
val = String(5+5); // Outputs 10, string, 2


// Boolean to String
val = String(true); // Outputs true, string, 4

// Date to String
val = String(new Date()); // Outputs Current date, string, 57-length of current date 

// Array to String
val = String([1,2,3,4,5]); // Outputs 1,2,3,4,5, string, 9

// Output
console.log(val);        
console.log(typeof val); 
console.log(val.length); 
 
