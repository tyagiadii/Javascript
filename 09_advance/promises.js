// // const promiseOne = new Promise(function(resolve,reject){
// //     // Do as async task
//     // DB calls , cryptography , network





// //     setTimeout(function(){
// //         console.log('Async task is completed');
// //         resolve()

// //     },1000)
// // })

// // promiseOne.then(function(){
// //     console.log("promise consumed");

// // })



// // we can do like this also 
// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()

//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");

// })


// // now let make another promise

// const promiseThree = new Promise(function(resolve,reject){
//     setInterval(function(){
//         resolve({username:"chai" , email: "tyag12@gmai.com"})
//     },1000)
// })


// promiseThree.then(function(user){
//     console.log(user);

// })


// // now lets see fourth promise

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "ashwani" ,password:"123" })

//         }else{
//             reject('ERROR:SOMETHING WENT WRONG')
//         }
//     },2000)
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username

// } )
// .then ((username) => {
//     console.log(username);


// })
// .catch(function(error){
//     console.log(error);

// }).finally(() => console.log("THE PROMISE IS RESOLVED OR REJECTED"));


// Lets do again

// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })

// promiseOne.then this is how we consumed our promise by using .then and then give the callback function and .then is directly associate with the resolve perimeter and we need to call our resolve() method to consumed our promise

// promiseOne.then(function(){                                     
//     console.log("Promise consumed");

// })

// lets see another promise
// Here we didnt declare any variable to promise so we can call the promise by using.then()

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)

// }).then(function(){
//     console.log("Async two completed");

// })

//now lets make another promise 
//In this promise we pass some data this time and then return their values.

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "chai", email: "chai212@gmail.com."
//         })

//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);



// })


/// let make our fourth promise and method then() inside it again then() method is called chaining.

// const promiseFour  = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:"Ashani",password:"123"})
//         }else{
//             reject('ERROR SOMETHING WENT WRONG')
//         }
//     },1000)
// })


// promiseFour
// .then((user) =>{
//     console.log(user);
//     return user.username

// }) 
// .then((username) => {
//     console.log(username);

// })
// .catch(function(error){
//     console.log(error);

// })
// .finally()
// console.log("THE PROMISE IS EITHER RESOLVED OR REJECTED");


/// LETS Go for another promise

// const promiseFive = new Promise(function (resolve, reject) {
//     {
//         setTimeout(function () {
//             let error = true
//             if (!error) {
//                 resolve({ username: "javascript", password: "123" })
//             } else {
//                 reject('ERROR : JS WENT WRONG')
//             }
//         }, 1000)
//     }
// });


//we can also use our previous methods but now let try another method for consumePromiseFive
// both methods are same we can use .then() method also and this async also.

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//     console.log(response);
    
//     }catch (error){
//         console.log(error);
        
//     }
    
// }

// consumePromiseFive()


// Let try something new
// we used response or you can use any variable here and .json() method because we want response in json format and in second chaining .then(data) we use data variable you can use any.

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);
    
})

.catch((error) => console.log(error));




