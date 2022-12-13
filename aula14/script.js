function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <12) {
        img.src = 'img/manhã.jpg'
        document.body.style.background = '#EFB27D'
    } else if (hora >= 12 && hora <18) {
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#BA631E'
    } else {
        img.src = 'img/noite.jpg'
        document.body.style.background = '#57466E'
    }
}
