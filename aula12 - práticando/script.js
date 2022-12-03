function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours('msg')
    msg.innerHTML = `Agora são ${hora} horas`


    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#fff79e'
    } 
    else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background= '#ffb787'
    }
    else{
        img.src = 'imagens/noite.jpg'
        document.body.style.background ='#525556'
    }
}

