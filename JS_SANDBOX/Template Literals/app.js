// Variables
const name = 'Brian';
const age = 45;
const job = 'Web Developer';
const city = 'Concord';

// HTML string, without template strings
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'; 

// Renders to the 'DOM' Document Object Model
document.body.innerHTML = html;
