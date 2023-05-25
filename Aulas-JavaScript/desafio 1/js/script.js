
var age = Number(window.prompt("Quatos anos voce tem ? : "))
if (age >= 18){
    window.alert("site liberado!")
}
else{
    window.alert("site bloqueado")
    window.location.href = "http://www.google.com.br"
}
