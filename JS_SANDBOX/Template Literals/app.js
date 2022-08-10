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


function hello() {
    return 'hello';
}

// With template literals (es6)
html = `
  <h1>${'Template Literals'}</h1>
  <ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>${2 + 2}</li>
  <li>${hello()}</li>
  <li>${age > 40 ? 'Over 40' : 'Under 40'}</li>
  </ul>`;


// Renders to the 'DOM' Document Object Model
document.body.innerHTML = html;
