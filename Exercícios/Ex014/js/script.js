function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 1
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora < 12){
        //Bom dia
        img.src = '../imagens/manha.png'
        document.body.style.background = '#dd9d22'
    } else if( hora < 18){
        //Boa Tarde
        img.src = '../imagens/tarde.png'
        document.body.style.background = '#a68068'
    }else{
        //Boa noite
        img.src = '../imagens/noite.png'
        document.body.style.background = '#3f304b'
    }
    
}
