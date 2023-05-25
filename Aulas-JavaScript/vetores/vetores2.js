var n1 = [3,6,1,7,9,4,2]
var aux

for(let j = 0; j < n1.length; j++){
    for(let i = 0; i < n1.length - 1; i++){
        if(n1[i] > n1[i+1]){
        aux = n1[i]  
        n1[i] = n1[i+1]
        n1[i+1] = aux
        }
    }
}
console.log(n1)