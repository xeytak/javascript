function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nas = document.getElementById('nasc')
    var res = document.getElementById('res')
    if (nas.value.length == 0 || nas.value > ano){
        window.alert('Dados Inválidos. Por Favor, Preencha Corretamente.')
    }
    else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - nas.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
      
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }
            else if (idade < 21){
                // jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }
            else if ( idade < 50){
                // adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }
            else{
                // idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
      
        else{
            genero = "Mulher"
            if (idade >= 0 && idade < 10){
                //criança
            }
            else if (idade < 21){
                // jovem
            }
            else if ( idade < 50){
                // adulto
            }
            else{
                // idoso
            }
        }
        
        res.style.textAlign= 'center'
        res.innerHTML = `${genero} de ${idade} anos.`
        res.appendChild(img)
       
    }
}                             

         