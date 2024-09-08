function discountedPrice(quantity){
    const firstPrice = 100;
    const secondPrice = 90;
    const abovePrice = 70;

    if(quantity <= 100){
        const total = quantity * firstPrice;
        return total;
    }
    if(quantity <= 200){
        const firstPrice = 100 * firstPrice;
        const reainQuantity = quantity - 100;
        const reainTotalQuantity = reainQuantity *secondPrice;
        const total = firstPrice + reainTotalQuantity;
        return total;
    }
    else{
        const firstPrice = 100 * firstPrice;
        const secondPrice = 100 * secondPrice;
        const reainQuantity = quantity - 200;
        const reainTotalQuantity = reainQuantity * abovePrice;
        const total = firstPrice + reainTotalQuantity + reainQuantity;
        return total;
    }
}


const sum = discountedPrice(270)
console.log(sum);