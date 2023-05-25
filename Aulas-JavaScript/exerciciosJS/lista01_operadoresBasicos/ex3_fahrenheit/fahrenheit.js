var num1 = 0;
var res = 0;
var button = document.getElementById("btnCalcular");
var resultLocale = document.getElementById("result")
button.addEventListener("click", clickar);

function clickar(){
    num1 = Number(document.getElementById("n1").value);
    res = num1 * 1.8 + 32
    resultLocale.innerText = res + "ºF"
}
