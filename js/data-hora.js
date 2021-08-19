setInterval(atualizaHoraEmTempoReal, 1);

function atualizaHoraEmTempoReal(){
 
    var hora = new Date();    
    
    var hora_atual = hora.getHours().toString().padStart(2, '0');
    var minuto = hora.getMinutes().toString().padStart(2, '0');
    var segundos = hora.getSeconds().toString().padStart(2, '0');

    const campo_hora = document.querySelector(".campo_hora");
    campo_hora.innerHTML = hora_atual + ':' + minuto + ':' + segundos;
}


var data = new Date();
var dia = data.getDate();
var mes = data.getMonth();
    mes += 1;

var mes_ajustado = ajustaZeros(mes);
var dia_ajustado = ajustaZeros(dia);
var ano = data.getFullYear();


const campo_data = document.querySelector(".campo_data");
campo_data.innerHTML = dia_ajustado + '/' + (mes_ajustado) + '/' + ano;


function ajustaZeros(data){
    var stringData = data.toString();
    
    if(stringData.length == 1){
        stringData = '0' + stringData;
    } 
    return stringData;
}