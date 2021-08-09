var data = new Date();

setInterval(function atualizaHoraEmTempoReal(){
    
var hora = data.getHours().toString().padStart(2, '0');
var minuto = data.getMinutes().toString().padStart(2, '0');
var segundos = data.getSeconds().toString().padStart(2, '0');

var campo_hora = document.querySelector(".campo_hora");
campo_hora.textContent = hora + ':' + minuto + ':' + segundos;
    
}, 1);


var dia = data.getDay().toString().padStart(2, '0');
var mes = data.getMonth().toString().padStart(2, '0');
var ano = data.getFullYear();


var campo_data = document.querySelector(".campo_data");
campo_data.textContent = (dia + '/' + mes + '/' + ano);


