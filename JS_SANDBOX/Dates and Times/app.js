let val;

// Date() will default to current days date if not specified
const today = new Date();
let birthday = new Date('12-7-1977');
birthday = new Date('December 7 1977');
birthday = new Date('12/7/1977');

val = birthday;


val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();


birthday.setMonth(3);
birthday.setDate(1);
birthday.setFullYear(1988);
birthday.setHours(4);
birthday.setMinutes(10);
birthday.setSeconds(32);

console.log(birthday);