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

let i = 0;

do {
    console.log('Number ' + i);
    i++;
} while (i < 10);