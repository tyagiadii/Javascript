
// Reduce method

 const myNums = [1,2,3]


//  const myTotal = myNums.reduce ( function (accumulator , currentvalue) {
//     console.log(`accumlator: ${accumulator} and currentvalue : ${currentvalue}`);
    
//     return accumulator + currentvalue
//  }, 0)


// Lets try this method with arrow function
const myTotal = myNums.reduce( (accumlator,currval) => accumlator+currval , 0)


//  console.log(myTotal);


const shoopingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "python",
        price : 2199
    },
    {
        itemName : "AI/ML course",
        price : 211999
    },

    {
        itemName : "B.Tech course",
        price : 111111111
    }
]

const priceTopay = shoopingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(priceTopay);


 