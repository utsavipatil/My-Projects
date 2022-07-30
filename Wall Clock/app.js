// console.log('Wall Clock');

function updateTime(){
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSec = currentTime.getSeconds();
    let timeOfDay = (currentHour < 12) ? "AM" : "PM";
    
    //12 Hour Format
    currentHour = (currentHour == 24) ? 0 : currentHour;
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour; 

    //Less than 10 values Pad 0 (Single Digit)
    currentHour = (currentHour < 10 ? "0" : "") + currentHour;
    currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute;
    currentSec = (currentSec < 10 ? "0" : "") + currentSec;
    
    let currentTimeStr = currentHour + ":" + currentMinute + ":" + currentSec + " " + timeOfDay;

    document.getElementById('clock').innerHTML = currentTimeStr;
}

let startClock = setInterval(()=>{
    updateTime();
}, 1000);
