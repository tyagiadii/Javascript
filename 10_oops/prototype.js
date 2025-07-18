// let myName = "Ashwani    "
// let mychannel = "chai      "

// console.log(myName.trueLength);



let myHeros = ["spiderman" , "batmen"]


let heroPower = {
    spiderman : "flying",
    batmen : "strong",

    getSpiderPower: function (){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}


Object.prototype.ashwani = function(){
    console.log(`ashwnai is present in all objects`);
    
}

Array.prototype.heyAshwani = function (){
    console.log(`ashwani say hello`);
    
}

// heroPower.ashwani()
// myHeros.ashwani()
// myHeros.heyAshwani()


// inheritance


const User = {
    name : "chai",
    email: "cj@gmail.com"
}

const teacher = {
    makeContent : true

}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssigment:'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport

}

teacher.__proto__ = User


//modern syntax

Object.setPrototypeOf(TeachingSupport , teacher)



// let solve our above problem here

let anotherUsername = "studywithme     "
String.prototype.trueLength = function (){
    // console.log(`${this}`);
    // console.log(`&{this.name}`);
    console.log(`True length is : ${this.trim().length}`);
    
    
    
}
anotherUsername.trueLength()
