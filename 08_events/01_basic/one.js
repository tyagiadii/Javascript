// Event in JS are run seqentially .

// document.getElementById('car1').onclick = function (){
//     alert('car1 clicked')
// }
// this is also the right method but it didn't give you more functionality and not a better approach use the EventListers.

// Events that need to be study ::
// type , timestamp , defaultPrevented , target , toElement , srcElement , currentTarget
// clientX , ClientY , scrrenX , screenY - for interview perspective
// altkey ,ctrkey , shiftkey , keyCode


// now we used the better approach and mostly used in JS

// document.getElementById('images').addEventListener('click',function(e){
//     console.log("clicked inside the ul");
// }, )

// document.getElementById('car1').addEventListener('click',function(e){
//     console.log("clicked the the car1");
//     e.stopPropagation()
// }, )
// document.getElementById('google').addEventListener('click',function(e){
//      e.preventDefault()
//      e.stopPropagation()
//     console.log('google clicked');
    
   
// },false)


// now our new task is if we click on any image everything image be gone.

document.querySelector('#images').addEventListener('click' , function(e){

    // first approach to remove the images
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode                               
        removeIt.remove()

    }   
    
    
    
    // removeIt.parentNode.removeChild(removeIt)                       // second method
    
},false)








