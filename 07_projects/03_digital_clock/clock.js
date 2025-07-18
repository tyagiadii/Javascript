const clock = document.getElementById('clock')
// we can use the query selector also document.querySelector('#clock')


setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML  = date.toLocaleTimeString();
}, 1000)