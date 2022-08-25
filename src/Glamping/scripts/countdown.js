var days, hours, minutes, seconds;
const targetDate = new Date('2022-09-09');

window.onload = function(){countdownTimer();}

function timeToLaunch() {
    var currentDate = new Date();
    var diff = (targetDate - currentDate) / 1000;
    diff = Math.floor(diff);

    days = Math.floor(diff / (60 * 60 * 24));
    seconds = diff - days * 60 * 60 * 24;
    hours = Math.floor(seconds / (60 * 60));
    seconds = seconds - hours * 60 * 60;
    minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;

    if (days < 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    }
}

function countdownTimer() {
    timeToLaunch();
    try {
        document.querySelectorAll('.countdown-container .countdown .days .number')[0].innerHTML = days;
        document.querySelectorAll('.countdown-container .countdown .hours .number')[0].innerHTML = hours;
        document.querySelectorAll('.countdown-container .countdown .minutes .number')[0].innerHTML = minutes;
        document.querySelectorAll('.countdown-container .countdown .seconds .number')[0].innerHTML = seconds;
    }catch(error){
        console.log('wrong page');
    }
    setTimeout(function(){countdownTimer()},1000);
}