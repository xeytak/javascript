
function contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let resposta = document.getElementById('resposta')
   

    if ( inicio.value.length == 0 || fim.value.length == 0 || passo.valeue.length == 0) {
        window.alert('[ERRO] Está faltando dados!')
    } else{
        resposta.innerHTML = 'Calculando...'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(p.value)

        if (i < f){
            for( c = i; c <= f; c+=p){
                resposta.innerHTML += `${c}`
    
            }

        } else{
            for(c = i; c >= f; c-=p){
                resposta.innerHTML -= `${c}`
            }
        }
       
    }
}









