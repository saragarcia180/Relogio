function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 16
    var min = data.getMinutes()
    
    
    
    
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#c6c4bf'//cor de fundo
        msg.innerHTML = `Agora são ${hora}:${min} Am`//mensagem
        //BOM DIA
    
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#1b425e'//cor de fundo
        msg.innerHTML = `Agora são ${hora}:${min} Pm`//mensagem
        //BOA TARDE
    } else {
        img.src = 'noite.png'//imagem
        document.body.style.background = '#15252b'//cor de fundo
        msg.innerHTML = `Agora são ${hora}:${min} Pm`//mensagem
        //BOA NOITE
    }
    }