function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const ChairTotalWood = perChairWood * chairQuantity;
    const tableTotalWood = perTableWood * tableQuantity;
    const bedTotalWood = perBedWood * bedQuantity;

    const totalWood = ChairTotalWood + tableTotalWood + bedTotalWood;
    
    return totalWood;
}  


const total = woodQuantity(0, 0, 1);
console.log(total);

// home work
/**
 * 
 * shirt price = 500
 * pant price = 300
 * shoe price = 900
 * 
 */