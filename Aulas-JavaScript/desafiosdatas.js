// desafio 1: de acordo com a hora retornar: bom dia(antes da 12) boa tarde(depois das 12 antes das 18) boa noite(depois das 18)
// desafio 2: dizer o dia da semana em extenso

var data = new Date()
var hora = data.getHours()
var dia = data.getDay()

switch(dia){
    case 0:
        diaSemana = "Domingo"
        break
    case 1:
        diaSemana = "Segunda"
        break
    case 2:
        diaSemana = "Terça"
        break
    case 3:
        diaSemana = "Quarta"
        break
    case 4:
        diaSemana = "Quinta"
        break
    case 5:
        diaSemana = "Sexta"
        break
    case 6:
        diaSemana = "Sabado"
        break
}
    if(hora<12){
        horario = "Bom dia"
}
    else if(hora>12 && hora<18){
        horario = "Boa tarde"
}
    else{
        horario = "Boa noite"
}

console.log(hora + " | " + dia + " | " + data)
console.log(horario + ", hoje é " + diaSemana)