const user = {
    username: "ashwani",
    price:111,
    
    
    welcomeMessage : function(){ 
        console.log(`${this.username} , welcome to website`);                    // this. refers to current context
        // console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function coffee () {
//     let username = "DDPS"
//     console.log(this.username);
    
// }

// coffee()

// const coffee = () => {                           // Arrow function
//     let username = "DDPS"
//     console.log(this);

// }


// const addTwo = (num1 ,num2) => {               // Arrow function and when we use return known as explicit return
//     return num1+num2
// }

// const addTwo = (num1 ,num2) => num1 + num2              // we can write like this also knowns as implicit return.

const addTwo = (num1 ,num2) => (num1 + num2)              // same we can also write like that.
 //                                                        // and to return the object we use parenthesis like ({}).





console.log(addTwo(5,1))

