function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("celta");
    var data = new Date();
    var hora = data.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        img.src = "manha.jpg";
        document.body.style.background = "yellow";

    } else if (hora >= 12 && hora < 18) {
        img.src = "tarde.jpg";
        document.body.style.background = "darkorange"; 

    } else {
        img.src = "noite.jpg";
        document.body.style.background = "darkgray";
    }
}
