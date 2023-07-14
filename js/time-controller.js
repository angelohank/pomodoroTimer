//ENUM?
const focusTimeStep = 0;
const shortBreakStep = 1;
const longBreakStep = 2;

const POMODORO_TIMER_DEFAULT = 1500; //25 minutos
const SHORT_BREAK_TIMER_DEFAULT = 300; //5 minutos
const LONG_BREAK_TIMER_DEFAULT = 600; //10 minutos

let currentTime = POMODORO_TIMER_DEFAULT; //TODO: deixar dinamico de acordo com o tipo de periodo
let intervalId;

const startButton = document.getElementById( "startButton" );
const stopButton = document.getElementById( "stopButton" )
const campo_tempo = document.getElementById( "tempo-restante" );

setDefaultValueInDisplay( 0 ); 

function updateCountdown() {
    if( currentTime == 0 ) {
        console.log( "fim da contagem" )
        //TODO: emitir notify para encerrar o periodo
    } else {
        currentTime--;
        refreshDisplay( currentTime );
    }
}

function setDefaultValueInDisplay( step ) {

    switch( step ) {
        case 1: 
            timeToDisplay = SHORT_BREAK_TIMER_DEFAULT;
            break;
        case 2: 
            timeToDisplay = LONG_BREAK_TIMER_DEFAULT;
            break;
        default:
            timeToDisplay = POMODORO_TIMER_DEFAULT;
    }
    
    refreshDisplay( timeToDisplay );
}

function startCountdown(){
    intervalId = setInterval( updateCountdown, 1000 );
}

function stopCountdown() {
    clearInterval(intervalId);
}

function refreshDisplay( currentTime ) {
    
    let min = Math.floor( currentTime / 60 );
    let seg = currentTime % 60;

    campo_tempo.innerHTML = min + ":" + seg;//TODO: ajustar zero do segundo
}