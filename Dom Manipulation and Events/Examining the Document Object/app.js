let val;

// Log properties in the DOM
val = document; // logs HTML document
val = document.all; // Gives us a collection of all tags within an array
val = document.all[9]; // Gives us a tag for the number within the array bracket
val = document.all.length; // Logs how many elements are in the DOM
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// Log forms from the dom
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

// Log images from the dom
val = document.images;

// Log scripts from the dom
val = document.scripts;
val = document.scripts[2].getAttribute('src');



console.log(val);