const botao = document.querySelector(".botao");
var clicou = false;


botao.addEventListener("click", function(){
    console.log("clicou");
    clicou = true;
    console.log(clicou);
})