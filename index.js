const date=document.getElementById("date")
const day=document.getElementById("day")
const month=document.getElementById("month")
const year=document.getElementById("year")
const Today=new Date();
const weekDays=["Sunday","Moday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const Months=["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(Today);
date.innerHTML=(Today.getDate()<10?"0":"")+Today.getDate();
day.innerHTML=weekDays[Today.getDay()];
month.innerHTML=Months[Today.getMonth()];
year.innerHTML=Today.getFullYear();
const clock=document.getElementById('clock')
//or
// const clock=document.querySelector('#clock')
setInterval(function(){
    let date=new Date()
    clock.innerHTML=date.toLocaleTimeString();
},1000);