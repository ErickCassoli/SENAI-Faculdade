var button = document.getElementById("btnCalcular");
var resultLocale = document.getElementById("result")
var res = 1;
button.addEventListener("click", clickar);

function clickar(){
  let num1 = Number(document.getElementById("n1").value); 
  while(num1>=1){
    res = res * num1
    num1--
  }
  resultLocale.innerText = res
}