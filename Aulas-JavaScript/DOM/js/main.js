//VAR: Escopo global
    //Qualquer um acessa essa variavel
//Escopo local
    //Só acesso aqui.

/*
getElementById - pega um elemento por ID.
getElementsByClass - pega um elemento por Class
querySelector - pega um elemento por Class ou ID (. / #)
querySelectorAll - pega todos os objetos daquela id/class 
*/

//Coletar e armazenar informação


var bSubmit = document.querySelector("#submit")
var bLimpar = document.querySelector("#limpar")
var nome = null;
var end = null;
var data = null;

//Eventos...
/*
    Quando algum evento acontecer, faz uma tarefa
    addEventListener('evento',o que fazer)
*/

bSubmit.addEventListener("click", receber)
bSubmit.addEventListener("click", mandar)
bLimpar.addEventListener("click", limpar)

// função
/* Função é um conjunto de tarefas/instruções que servirão de propósito especifico para cada tarefa */
// Comando Nome. parametros
// F () mostra so o resultado F executa a função
function receber(){
    nome = document.querySelector("#nome").value
    end = document.querySelector("#end").value
    data = document.querySelector("#data").value
}
function mandar(){
    if(data != 0, nome != 0, end != 0 ){
    console.log("tudo enviado")
    console.log(nome, end, data)
    }
    else{
       console.log("algum erro")
    }
}
function limpar(){
    document.querySelector("#nome").value = ""
    document.querySelector("#end").value = ""
    document.querySelector("#data").value = 0
    console.log(nome, end, data)
}