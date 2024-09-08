function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const number = [65, 66, 68, 72, 78, 60, 65, 60];
console.log(getMax(number));


// min number

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const num = [65, 66, 68, 72, 78, 60, 65, 60];
console.log(getMin(num));