// 1st task
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num
        }
    }
    return min;   
}

const heights2 = [167, 190, 120, 165, 137];
const heights = getMin(heights2);
// console.log('min-number:', heights);





// 2nd task
function tinyFriend(friends) {
    let tinyFriend = friends[0]
    for (let i = 0; i < friends.length; i++) {
        let element = friends[i]
        if (tinyFriend.length>element.length) {
            tinyFriend = element
           }

    }
    // console.log("The Smallest Name is",tinyFriend)
}

let friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed']
tinyFriend(friends);


// 3rd task
function perChairGadget(num1, num2, num3){
   let laptop = 35000;
   let tablet = 15000;
   let mobile = 20000;

   const perLaptop = laptop * num1;
   const perTablet = tablet * num2;
   const perMobile = mobile * num3;

   const total = perLaptop + perTablet + perMobile;

   return total;
}

   const sum = perChairGadget(1, 2, 3);
//    console.log('total price :', sum);



// 4th task
const mobiles = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];


function getAvg(mobiles){
    let sum = 0;
    for(const mobile of mobiles){
      sum = sum + mobile.price;
    }
    // console.log('total sum:', sum);
    const avg = sum / 6;
    return avg;
}


const result = getAvg(mobiles);
// console.log('Avg:' ,result);



// 5rd task
const phones = [
    {name: 'samsung', price: 100, camera: '24mp', color: 'black'},
    {name: 'iphone', price: 20, camera: '24mp', color: 'black'},
    {name: 'oppo', price: 1000, camera: '24mp', color: 'black'},
    {name: 'walton', price: 2000, camera: '24mp', color: 'black'},
    {name: 'Xoami', price: 31000, camera: '24mp', color: 'black'},
    {name: 'htc', price: 23000, camera: '24mp', color: 'black'}
];


function getMax(phones){
    let mix = phones[0];
    for(const phone of phones){
        if(phone.price > mix.price){
            mix = phone ;
        }
    }
    return mix ;
}
const price = getMax(phones);
// console.log(price);
