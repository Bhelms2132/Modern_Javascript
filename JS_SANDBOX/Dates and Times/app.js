let val;

// Date() will default to current days date if not specified
const today = new Date();
let birthday = new Date('12-7-1977');
birthday = new Date('12/7/1977');
birthday = new Date('December 7 1977');

val = today;

// .get methods
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();



console.log(val);