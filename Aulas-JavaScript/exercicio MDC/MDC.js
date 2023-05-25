var num1 = 0;
var num2 = 0;
var res = 0;
var i = 0;
var button = document.getElementById("btnCalcular");
var resultLocale = document.getElementById("result")
button.addEventListener("click", clickar);

function clickar(){
    num1 = Number(document.getElementById("n1").value);
    num2 = Number(document.getElementById("n2").value);
    if(num1 - num2 == 1 || num2 - num1 == 1){
        res = "1"
    }
    else{
        if(num1>num2){
        i = num2
    }
    
    else if(num1<num2){
        i = num1
        
    }
    else{
        res = num1
    }
    }  
    while(i!=1){
        let teste1 = num1%i == 0 
        let teste2 = num2%i == 0
         if(teste1 == true && teste2 == true){
         res = i
         break
         }
     i--
     }
    resultLocale.innerText = res
}