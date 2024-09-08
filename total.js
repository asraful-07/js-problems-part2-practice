const products =[
    {name: 'shampoo', price: 100, quantity: 9},
    {name: 'chiruni', price: 100, quantity: 2},
    {name: 'shirt', price: 200,  quantity: 7},
    {name: 'pant', price: 10,  quantity: 10}
]

function getShoppingTotal(products){
    let sum = 0;
    for(const product of products){
       sum = sum + product.price * product.quantity;
    }
    return sum
}

const total = getShoppingTotal(products);
console.log('total ajke khoto dhslo:', total);


// total sum

function carTotal (products){
    let total = 0;
    for(const product of products){
        total = total + product;
    }
    return total;
}

const mot = getShoppingTotal(products);
// console.log(mot);
