//ENUM?
const focusTimeStep = 0;
const shortBreakStep = 1;
const longBreakStep = 2;

const POMODORO_TIMER_DEFAULT = 1500; //25 minutos
const SHORT_BREAK_TIMER_DEFAULT = 300; //5 minutos
const LONG_BREAK_TIMER_DEFAULT = 600; //10 minutos

let currentTime = SHORT_BREAK_TIMER_DEFAULT; //TODO: deixar dinamico de acordo com o tipo de periodo

const startButton = document.getElementById("startButton");
const campo_tempo = document.getElementById("tempo-restante");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    if( currentTime == 0 ) {
        console.log("fim da contagem")
        //TODO: emitir notify para encerrar o periodo
    } else {
        currentTime--;
        refreshDisplay( currentTime );
    }
}

function setDefaultValueInDisplay( step ) {
    
    let timeToDisplay = 0;

    switch(step) {
        case 0:
            timeToDisplay = POMODORO_TIMER_DEFAULT;
        case 1: 
            timeToDisplay = SHORT_BREAK_TIMER_DEFAULT;
        case 2: 
            timeToDisplay = LONG_BREAK_TIMER_DEFAULT;
    }
    
    campo_tempo.innerHTML = timeToDisplay;
}

function StartCountdown(){
    console.log("startCountdown")
}


function refreshDisplay( currentTime ) {
    let min = Math.floor(currentTime / 60);
    let seg = currentTime % 60;

    campo_tempo.innerHTML = min + ":" + seg
}