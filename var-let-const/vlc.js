
// USANDO O VAR :

if(true){
    var a = 10
}
console.log(a)                    // CONSEGUIMOS ACESSÁ-LA FORA DO ESCOPO DA FUNÇÃO.


// USANDO O LET :

if(true){
    let b = 11 
    console.log(b)
}
//console.log(b)                  // DESSA FORMA, O TERMINAL DA ERRO, POIS LET SÓ FUNCIONA DENTRO DO ESCOPO.

if(true){
    const c = 12
    c = 12                      //  NÃO CONSEGUIMOS ALTERAR O VALOR DE UMA CONSTANTE 
    console.log(c)
}   

