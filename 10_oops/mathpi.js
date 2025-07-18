// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);


const chai = {
    name: 'ginger chai',
    price:250,
    isAvilable:true
}

console.log(Object.getOwnPropertyDescriptor(chai ,"name"));

Object.defineProperty(chai, 'name',{
    writable: true,
   enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai ,"name"));
