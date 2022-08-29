// FOR LOOP - Use FOR LOOP when you know how many times you want the loop to run

// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log('2 is a rounded number');
//         continue;
//     }
//     if(i === 4){
//         console.log('4 is a rounded number');
//         continue;
//     }
//     if(i === 6){
//         console.log('6 is a rounded number');
//         continue;
//     }
//     if(i === 8){
//         console.log('8 is a rounded number');
//         continue;
//     }
//     if(i === 9){
//         break;
//     }
//     console.log('Number ' + i);
// }





// WHILE LOOP - Use the WHILE LOOP when you're not certain on how many times the loop should run

// Set variable outside of the loop
// let i = 0;

// while (i < 10) {
//     console.log('Number ' + i);
       // increment will be inside the loop statement
//     i++;
// }





// DO WHILE LOOP - Will always run at least once no matter what

// let i = 0;

// do {
//     console.log('Number ' + i);
//     i++;
// } while (i < 10);





// LOOPING THROUGH AN ARRAY
   let cars = ['Chevy', 'Ford', 'Honda', 'Toyota', 'BMW', 'GMC'];

// for (let i = 0; i < cars.length; i++) {
//    console.log(cars[i]);
// }





// FOR EACH LOOP
// cars.forEach(function(car, index){
//      console.log(`${car} : ${index}` );    
// });



// MAP - Used to return a different array
// const users =[
//     {id: 1, name:'Bob'},
//     {id: 2, name:'Steve'},
//     {id: 3, name:'Angel'},
//     {id: 4, name:'Samantha'},
//     {id: 5, name:'Larry'},
// ];

// const ids = users.map(function(user) {
//     return user.name;
// });

// console.log(ids);




// FOR IN LOOP

const user = {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 40,
    occupation: 'Software Developer'
};

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}




