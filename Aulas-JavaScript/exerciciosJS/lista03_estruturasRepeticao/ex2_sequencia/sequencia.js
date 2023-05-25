var num1 = 0;
var num2 = 0;

var button = document.getElementById("btnCalcular");
var resultLocale = document.getElementById("result")
button.addEventListener("click", clickar);

function clickar(){
    var res = [];
    num1 = Number(document.getElementById("n1").value); 
    num2 = Number(document.getElementById("n2").value);
    if(num1 > num2){
        while(num1 > num2 ){
        console.log(num1)
        res.push(num1)
        num1--
        }
    }
    else{
        while(num1 < num2 ){
            console.log(num1)
            res.push(num1)
            num1++
        }
    }
    resultLocale.innerText = res
    
}

