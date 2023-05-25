var button = document.getElementById("btnCalcular");
var result = document.getElementById('result');

button.addEventListener("click", executar);

function executar(){
    let num1 = Number(document.getElementById("n1").value);
    let num2 = Number(document.getElementById("n2").value);
    
    if(num1>num2){
        mdc(num1,num2)
    }
    else{
        mdc(num2,num1)
    }
}
function mdc(maior, menor){
    if(maior%menor==0){
        return menor
    }
        for(let ctrl = parseInt(menor/2); ctrl>=1 ; ctrl--){
            if(maior%ctrl==0 && menor%ctrl==0){
                result.innerText = ctrl
                return ctrl
            }
        }
}