const clock=document.getElementById('clock');
const dates=document.getElementById('dates');


setInterval(function(){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
    dates.innerHTML=date.toLocaleDateString();
},1000)