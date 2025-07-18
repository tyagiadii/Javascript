// for of loop

const arr = [1,2,3,4,5,6]

// for (const num of arr) {
//     console.log(num);
    
    
// }


const greetings = "Helloworld"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
    
// }


//MAPS

const map = new Map()
map.set('IN' , "INDIA")
map.set('USA' , "UNITED STATE OF AMERICA")
map.set('FR' , "FRANCE")
map.set('PAR' , "PARIS")
map.set('IN' , "INDIA")                             // THIS MAP FUNCTION DID NOT ALLOWS THE DUBLICATION VALUES.

// console.log(map);

// suppose i need to use for of loop to print the values of previous map function.

// for (const [key ,value] of map) {
//     console.log(key, ':' ,value);
    
    
// }

// suppose if we have object so can we use for of loop on that lets try :

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'spiderman'


// }

const myObject = {
    game1 : 'NFS',
    game2 : 'spiderman'

}

// for (const [key,value] of myObject) {
//     console.log(key , ':' , value);
    
    
    
// }





