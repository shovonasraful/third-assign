function cashout(givenmoney,percentage){
        const charge = (givenmoney*percentage)/100;
    return charge;
}
const reseult = cashout(2000,1.75);
console.log(reseult);
