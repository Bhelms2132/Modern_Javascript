// document.getElementById()

// console.log(document.getElementById('task-title'));

// Get things from the element
// console.log(document.getElementById('task-title').id);

// Change styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// Change Content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'To Do List';
// document.getElementById('task-title').innerHTML = 'My List';

// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));
console.log(document.querySelector('ul'));
console.log(document.querySelector('li'));

document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(2)').style.color = 'green';
document.querySelector('li:nth-child(3)').style.color = 'orange';
document.querySelector('li:nth-child(4)').style.color = 'purple';