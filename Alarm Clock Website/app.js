// console.log('Hey');
$('#failure').hide();
$('#success').hide();
let validAlarm = false;

const alarmSubmit = document.getElementById('alarmSubmit');

//Event Listener to Submit Button
alarmSubmit.addEventListener('click' , setAlarm);

//Set Alarm
function setAlarm(e){
    e.preventDefault();
    const alarm = document.getElementById('alarm');

    let alarmDate = new Date(alarm.value);
    let now = new Date();
    console.log(`now ${now}`);
    let timeToAlarm = alarmDate - now;
    
    console.log(`Setting Alarm for ${alarmDate}`);
    console.log(timeToAlarm);

    if(timeToAlarm >= 0){

        validAlarm = true;
        setTimeout(() => {
            ringBell();
        }, timeToAlarm);

    }else{
        validAlarm = false;
    }

    //Alerts
    if(validAlarm){
        console.log(validAlarm);
        let success = document.getElementById('success');
        success.classList.add('show');

        $('#failure').hide(); //JQuery
        $('#success').show();
    }else{
        console.log(validAlarm);
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        
        $('#failure').show();
        $('#success').hide();
    }
};

//Ring Bell
var audio = new Audio('audio_sound.wav');

function ringBell(){
    audio.play();
}

//Stop Alarm
const stopAlarm = document.getElementById('stopAlarm');
stopAlarm.addEventListener('click', ()=> {
    audio.stop();
});

