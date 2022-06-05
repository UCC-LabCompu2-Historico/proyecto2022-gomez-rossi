clearInterval(timer);
}

var timer;

var seconds = 0;
var minutes = 0;

function countSeconds(){
    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 90){
        resultado();
        clearInterval(timer);
    }

    var timerValue = minutes + " minutos, " + seconds + " segundos";
    document.getElementById("timer").innerHTML = timerValue;
}

timer = setInterval(countSeconds, 1000);