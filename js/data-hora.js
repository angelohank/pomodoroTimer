var data = new Date();
var hora = data.getHours().toString().padStart(2, '0');
var minuto = data.getMinutes().toString().padStart(2, '0');
var segundos = data.getSeconds().toString().padStart(2, '0');;

var campo_hora = document.querySelector(".campo_hora");
var botao = document.querySelector("#botao");

botao.addEventListener("click", function(){
    campo_hora.textContent = (hora + ':' + minuto + ':' + segundos);
})