function getMax(num1, num2){
    if(num1 > num2 ){
        return num1;
    }
    else{
        return num2;
    }
}

const numbers = getMax(89, 84);
// console.log('max of two is:' ,numbers);


// max 3
const friend1 = 89;
const friend2 = 98;
const friend3 = 90;

if(friend1 > friend2 && friend1 > friend3){
    console.log('friend1 is the best');
}

else if(friend2 > friend1 && friend2 > friend3){
    console.log('friend2 is the best');
}
else{
    console.log('friend3 is the best');
}

// 2nd logic function
function maxOfThree(friend1, friend2, friend3){

    if(friend1 > friend2 && friend1 > friend3){
       return friend1;
    }
    
    else if(friend2 > friend1 && friend2 > friend3){
        return friend2;
    }
    else{
        return friend3;
    }

}
const number = maxOfThree(89, 98, 90);
console.log('friends is the best', number);


// 3rd 10 numbers in who is the best 

const max = Math.max(19, 23 , 17 , 16 , 13 , 12, 3 , 14,);
console.log('friends is the best',max);