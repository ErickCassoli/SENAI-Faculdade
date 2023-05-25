var num1 = 0;
var res = 0;
var button = document.getElementById("btnCalcular");
var resultLocale = document.getElementById("result")
button.addEventListener("click", clickar);

function clickar(){
    num1 = Number(document.getElementById("n1").value);
    res = num1 * 1.609
    resultLocale.innerText = res.toFixed(3) + "Km"
}
