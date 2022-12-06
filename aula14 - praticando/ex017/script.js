

function tabuada(){
    var num =  document.getElementById('txtnum')
    var tabuada = document.getElementById('seltab')
    if (num. value.length == 0){
        window.alert('Preencha o campo exigido!')
    }
    else{
        var numero = Number(num.value)
        tabuada.innerHTML = ''
        for(c=1; c<=10; c++){
            var item =  document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            item.value = `${tabc}`
            tabuada.appendChild(item)

        }
    }
}

