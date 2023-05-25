var num1 = 0;
var num2 = 0;
var res = 0;
var button = document.getElementById("btnCalcular");
var resultLocale = document.getElementById("result")
button.addEventListener("click", clickar);

function clickar(){
    num1 = Number(document.getElementById("n1").value);
    num2 = Number(document.getElementById("n2").value);
    res = (num1 + num2) / 2
    resultLocale.innerText = res
}
