// WINDOW METHODS / OBJECTS / PROPERTIES

// CONSOLE - Is a property, will return the CONSOLE OBJECT  for the window
//console.log('Hello World!');



// ALERT - Is a method that displays am alert box with a message and an OK button
//alert('Hello World!');



// PROMPT - Is a method that displays a dialog box that prompts the visitor/user for input
// const input = prompt();
// alert(input);



// CONFIRM - Is a method that displays a dialog box with a message and an OK and a Cancel button
// if(confirm('Are you sure?')){
//     console.log('YES!');
// } else {
//     console.log('NO!');
// }



// OUTER HEIGHT AND WIDTH
let val;

val = window.outerHeight;
val = window.outerWidth;

// INNER HEIGHT AND WIDTH
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// LOCATION OBJECT
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// REDIRECT
// window.location.href = 'http://google.com';

// RELOAD
// window.location.reload();

// HISTORY OBJECT
//window.history.go(-2);
//val = window.history.length;

// NAVIGATOR OBJECT
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.platform;
val = window.navigator.userAgent;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val);