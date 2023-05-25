var num1 = 0;

var button = document.getElementById("btnCalcular");
var resultLocale = document.getElementById("result")
button.addEventListener("click", clickar);

function clickar(){
    var res = [];
    num1 = Number(document.getElementById("n1").value); 
    while(num1 >= 0 ){
        res.push(num1)
        num1--
    }
    resultLocale.innerText = res
    
}

