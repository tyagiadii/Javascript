// Array

const myArr = [0,1,2,3,4,5]   // Declare an array
//const superHero = ["Spiderman" , "Batemen"]     // we can also declare array like this also
//const myArr = new Array (1,2,3,4,5)              // we can also do that also


// console.log(myArr[0]);

// Array  methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)       // it add the element at the starting position of array [9,0,1,2,3..]
// myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));


// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr);
//console.log(typeof newArr);

//slice , splice

// const newArr = [10,20,30,40,50,60]
// console.log(newArr.slice(0,5));


// console.log(newArr.splice());

console.log("A " , myArr)   // output - A [0,1,2,3,4,5]

const myn1 = myArr.slice(1,3)

console.log(myn1);           // output - [1,2]
console.log("B " , myArr);   // output - B [0,1,2,3,4,5]

const myn2 = myArr.splice(1,3)
console.log(myn2);













