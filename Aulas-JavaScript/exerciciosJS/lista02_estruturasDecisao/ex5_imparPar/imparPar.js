var num1 = 0;
var num2 = 0;
var res = 0;
var button = document.getElementById("btnCalcular");
var resultLocale = document.getElementById("result")
button.addEventListener("click", clickar);

function clickar(){
    num1 = Number(document.getElementById("n1").value);
    res = num1 % 2
    if(res == 0){
        resultLocale.innerText = "é Par"
    }
    else{
        resultLocale.innerText = "é Impar"
    }

}
