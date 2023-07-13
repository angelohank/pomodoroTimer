const POMODORO_TIMER_DEFAULT = 1500; //25 minutos
const SHORT_BREAK_TIMER_DEFAULT = 300; //5 minutos
const LONG_BREAK_TIMER_DEFAULT = 600; //10 minutos

let currentTime = POMODORO_TIMER_DEFAULT; //TODO: deixar dinamico de acordo com o tipo de periodo

const startButton = document.getElementById("startButton");
const campo_tempo = document.getElementById("tempo-restante");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    if( currentTime == 0 ) {
        console.log("fim da contagem")
        //TODO: emitir notify para encerrar o periodo
    } else {
        currentTime--;
    }
}

function setDefaultValue() {
    campo_tempo.innerHTML = POMODORO_TIMER_DEFAULT;
}

function StartCountdown(){
    console.log("startCountdown")
}