var num1 = 0;
var res = 0;
var button = document.getElementById("btnCalcular");
var resultLocale = document.getElementById("result")
button.addEventListener("click", clickar);

function clickar(){
    num1 = Number(document.getElementById("n1").value); 
    if (num1 <= 1) {
      res = "não é primo"
    } 
    else if (num1 <= 3){ 
      res = "é primo"
    }
    else if (num1 % 2 == 0 || num % 3 == 0){
      res = "não é primo"
    }
    for (let i = 4; i * i <= num1; i += 6) {
      if (num1 % i == 0 || num1 % (i + 2) == 0) {
        res = "é primo"
      }
      else{
        res = "não é primo"
      }
    }
    resultLocale.innerText = res 
}
