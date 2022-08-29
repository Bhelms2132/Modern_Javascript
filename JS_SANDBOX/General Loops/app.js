// FOR LOOP

for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is a rounded number');
        continue;
    }
    if(i === 4){
        console.log('4 is a rounded number');
        continue;
    }
    if(i === 6){
        console.log('6 is a rounded number');
        continue;
    }
    if(i === 8){
        console.log('8 is a rounded number');
        continue;
    }
    if(i === 9){
        break;
    }
    console.log('Number ' + i);
}