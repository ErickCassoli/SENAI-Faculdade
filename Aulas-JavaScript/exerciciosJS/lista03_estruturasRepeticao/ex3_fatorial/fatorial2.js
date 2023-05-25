var button = document.getElementById("btnCalcular");
var resultLocale = document.getElementById("result")

button.addEventListener("click", clickar);

function clickar(){
    let num1 = Number(document.getElementById("n1").value); 
    resultLocale.innerText = fat(num1)
    }
function fat(fatorial){
  if(fatorial==1)
    return 1

  return fatorial*fat(fatorial-1)

}