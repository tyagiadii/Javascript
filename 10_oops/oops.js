


// function User(username , loginCount , isLoggedIn){
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn = isLoggedIn

//     this.greeting = function(){
//         console.log(`welcome ${this.username}`);
        
//     }

//     return this
// }

// const userOne = new User("Ashwani" , 12 , true)
// const userTwo  = new User("Shubham" , 2, false)
// console.log(userOne.constructor);
// //console.log(userTwo);



function mulitplyBy5(num) {
    return  num *5


}

mulitplyBy5.power = 2
// console.log(mulitplyBy5(5));
// console.log(mulitplyBy5.power);
// console.log(mulitplyBy5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++


}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("chai",20)
const tea = new createUser("tea" ,30)

chai.printMe()


/*

Here's what happens behind the scene when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new javascript object.

A prototype is linked : The newly created object get linked to the protype of the constructor function. This means that it has access to properties and method defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified argument and this is bound to the newly created object . If no explicit return value is specified from the constructor . javascript assume this , the newly created object , to be the intended return value.

The new object is returned : After the constructor function has been called, if it doesn't return a non-primitive value (object , array , function , etc) , the newly created object is returned.


*/