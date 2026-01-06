/**Reduce method. */

const myNums = [1,2,3]

const myTotal = myNums.reduce(function (accumulater, currentvalue){
    console.log(`accumulater: ${accumulater} and currval: ${currentvalue}`)
    return accumulater + currentvalue
}, 0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "java course",
        price:2999
    },
    {
        itemName: "html course",
        price:2999
    }
]

const priceToPay = shoppingCart.reduce((accumulater, item)=> accumulater + item.price, 0)

console.log(priceToPay);