
let valores = [8, 1, 7, 4, 2, 9]
 
//console.log(`${valores}`) itens sem os colchetes 

/* 
pos = 0
while pos <=valores.length{
    console.log(valores)
    pos++
*/


/*

for(let pos=0; pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

// USANDO FOR IN :

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// USANDO O indexOf() :

let posição = valores.indexOf(4)
console.log(`Está na posição ${posição}`)


// Se o index não achar o valor :

let pos = valores.indexOf(3)
console.log(`Não esta dentro do vetor, retorna posição ${pos}`)


