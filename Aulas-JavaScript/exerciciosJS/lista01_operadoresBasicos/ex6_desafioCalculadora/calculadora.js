var num1 = 0;
var num2 = 0;
var res = 0;
var buttonSoma = document.getElementById("btnSomar");
var buttonSub = document.getElementById("btnSub");
var buttonMult = document.getElementById("btnMult");
var buttonDiv = document.getElementById("btnDiv");

var resultLocale = document.getElementById("result")
buttonSoma.addEventListener("click", Somar);
buttonSub.addEventListener("click", Subitrair);
buttonMult.addEventListener("click", Multiplicar);
buttonDiv.addEventListener("click", Dividir);

function Somar(){
    num1 = Number(document.getElementById("n1").value);
    num2 = Number(document.getElementById("n2").value);
    res = (num1 + num2)
    resultLocale.innerText = res
}
function Subitrair(){
    num1 = Number(document.getElementById("n1").value);
    num2 = Number(document.getElementById("n2").value);
    res = (num1 - num2)
    resultLocale.innerText = res
}
function Multiplicar(){
    num1 = Number(document.getElementById("n1").value);
    num2 = Number(document.getElementById("n2").value);
    res = (num1 * num2)
    resultLocale.innerText = res
}
function Dividir(){
    num1 = Number(document.getElementById("n1").value);
    num2 = Number(document.getElementById("n2").value);
    res = (num1 / num2)
    resultLocale.innerText = res
}
