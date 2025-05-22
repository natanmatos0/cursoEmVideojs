function sequencia() {
    var inicio = document.getElementById("init")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("pass")
    var resultado = document.getElementById("res")
    var inicion = Number.parseInt(inicio.value)
    var fimn = Number.parseInt(fim.value)
    var passon = Number.parseInt(passo.value)
    while (inicion <= fimn ){
        inicion + passon
        resultado.getElementById = `A sequencia é ${inicion}` 
    }
}