setInterval(atualizaHoraEmTempoReal, 1000);

function atualizaHoraEmTempoReal(){
 
    const hora = new Date();    
    var hora_atual = hora.getHours().toString().padStart(2, '0');
    var minuto = hora.getMinutes().toString().padStart(2, '0');
    var segundos = hora.getSeconds().toString().padStart(2, '0');

    var campo_hora = document.querySelector(".campo_hora");
    campo_hora.innerHTML = hora_atual + ':' + minuto + ':' + segundos;
    
};

const data = new Date();
var dia = data.getDay().toString().padStart(2, '0');
var mes = data.getMonth().toString().padStart(2, '0');
var ano = data.getFullYear();


var campo_data = document.querySelector(".campo_data");
campo_data.textContent = (dia + '/' + mes + '/' + ano);