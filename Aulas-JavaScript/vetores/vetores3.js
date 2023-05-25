var n1 = [3,6,1,7,9,4,2,13,231,3,453,234,3,35]
var aux = []

console.log(pesquisar(99))

function pesquisar(n){
    for(let i = 0; i < n1.length; i++){
        if(n1[i]==n)
            aux.push(i)
    }
    if(aux.length==0)
        return `O numero ${n} não foi encontrado`       
    return `O numero ${n} foi encontrado na posição ${aux}`

}