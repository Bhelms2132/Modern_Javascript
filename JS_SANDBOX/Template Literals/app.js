// Variables
const name = 'Brian';
const age = 45;
const job = 'Web Developer';
const city = 'Concord';

// HTML string, without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'; 

html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>'; 




// With template literals (es6)
html = `
  <ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  </ul>`;


// Renders to the 'DOM' Document Object Model
document.body.innerHTML = html;
