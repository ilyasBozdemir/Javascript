let UserName = prompt("Kullanıcı adınızı giriniz:");
let myName = document.querySelector("#myName");
let day = document.querySelector("#day");
let time = document.querySelector("#time");

UserName ? (myName.innerHTML = UserName) : (myName.innerHTML = "Anonim");

let d= new Date();
let gun = d.getDay();
let ay = d.getMonth();
let yil = d.getFullYear();

day.innerHTML=`${addZero(gun)}.${addZero(ay)}.${addZero(yil)}`;

setInterval(function()
{
  let date, hour, minute, second;
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
  
    time.innerHTML = `${addZero(hour)}:${addZero(minute)}:${addZero(second)}`;
   
   

},1000);

 
  function addZero(n) {
    return n < 10 ? (n = "0" + n) : n;
  }
 