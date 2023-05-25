var n1 = [3,4,1,5,9,0,3,3,5,6]
var aux
/*let n2 = []*/

for(let i = 0; i < n1.length / 2; i++){
    aux = n1[(n1.length-1)-i]  
    n1[(n1.length-1)-i] = n1[i]
    n1[i] = aux 
}
   console.log(n1)
/*
for(let i = n1.length - 1 ; i >= 0 ; i--){
    n2.push(n1[i])
}
*/

/*
for(let i = 1 ; i < n1.length ; i++){
    n2[n1.length] = n1[i-1]
}

*/