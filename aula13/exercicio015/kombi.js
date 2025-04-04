function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("input#txtano")
    var res = document.getElementById("res")
    var idade = ano - Number(fano.value)

    if (fano.value.length == 0 || Number(fano.value) > ano || idade >= 116) {
        res.innerHTML ="Verifique os dados e tente novamente"
    } else {
        var fsex = document.getElementsByName("radsex")
        var genero = ""

        if (fsex[0].checked) {
            genero = "masculino"
        } else if (fsex[1].checked) {
            genero = "feminino"
        }

        res.innerHTML = `Você é do gênero ${genero}, com ${idade} anos`
    }
}
