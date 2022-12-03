var idade = 10
console.log(`Você tem ${idade} anos.`)

if (idade >= 18 ){
    console.log('Voto obrigratório')
}
else{
    if (idade >= 16 || idade >= 65){
        console.log('Voto facultativo')
    }
    else {
        console.log('Não vota.')
    }
}

