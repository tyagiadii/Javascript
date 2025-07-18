const myNumers = [1, 2, 3, 4, 5, 6, 78, 8]

// const newNums = myNums.map( (num) => num+10 )                           // map also work like callback function 

const newNums = myNumers
    .map((num) => num * 10)
    .map((num) =>num + 1 )
    .filter( (num) => num >= 40)


console.log(newNums);
