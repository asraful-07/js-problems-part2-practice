const phones = [
    {name: 'samsung', price: 100, camera: '24mp', color: 'black'},
    {name: 'iphone', price: 20, camera: '24mp', color: 'black'},
    {name: 'oppo', price: 1000, camera: '24mp', color: 'black'},
    {name: 'walton', price: 2000, camera: '24mp', color: 'black'},
    {name: 'Xoami', price: 31000, camera: '24mp', color: 'black'},
    {name: 'htc', price: 23000, camera: '24mp', color: 'black'}
]


function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const mobil = getCheapestPhone(phones);
console.log(mobil);

// msx phone.price hw