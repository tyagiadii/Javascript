// // for loop

// for (let  i= 0;  i<= 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("5 is best number");
        
//     }
//     console.log(element);

    
    
// }

// const element = i;

// for (let i = 0; i <=10; i++) {
//     console.log(`outloop value: ${i}`);
    
//     for (let  j= 0;  j <= 10; j++) {
//         //console.log(`Inner Loop value is ${j} and inner loop ${i}`);
//         console.log(i + '*' + j +  "=" + i*j);
        
        
        
//     }
    
// }


let myArray = ["flash" , "Batmen" , "superman"]
//console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
  //  console.log(element);
    
    
}


// break and continue

// for (let index = 1; index<=20; index++) {
//     if (index == 5) {
//         console.log(`Detcted 5`);
//         break
        
        
//     }
//     console.log(`value of i is ${index}`);

    
    
// }


for (let index = 1; index<=20; index++) {
    if (index == 5) {
        console.log(`Detcted 5`);
        continue
        
        
    }
    console.log(`value of i is ${index}`);

    
    
}
