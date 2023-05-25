var num1 = 0;
var num2 = 0;
var res = 0;
var button = document.getElementById("btnCalcular");
var resultLocale = document.getElementById("result")
button.addEventListener("click", clickar);

function clickar(){
    num1 = Number(document.getElementById("n1").value);
    num2 = Number(document.getElementById("n2").value);
    res = num1 % num2
    if(res == 0){
        resultLocale.innerText = "o primeiro é multiplo do segundo"
    }
    else{
        resultLocale.innerText = "o primeiro não é multiplo do segundo"
    }

}
