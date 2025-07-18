// let a = 10
// const b = 20
// var c = 30




// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }









// console.log(a);
// console.log(b);
// console.log(c);






// this isssue comes up because of it is not working like block scope
// {}- this is scope


function one() {
    const username = "Ashwani"

    function two (){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    // two()


}


// one()



if(true){
    const username = "plant"   
    if (username === "plant"){
        const website = " youtube"
        // console.log(username+website);
    }
    // console.log(website);
    
}
// console.log(username);




//  +++++++++++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num){                                                           // function 
    return num+1

}





addTwo(5)
const addTwo = function(num){                                                 // this is also the function
    return num + 2
}


