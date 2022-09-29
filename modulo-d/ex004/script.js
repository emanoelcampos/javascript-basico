function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var resultado = document.getElementById('resultado')

    if (inicio == 0 || fim == 0 || passo.lenght == 0) {
        //alert('[ERRO] Faltam dados!')
        resultado.innerHTML=`Impossível contar!`
    } else {
        resultado.innerHTML=`Contando: <br>` 
        if (passo <= 0) {
            alert('Passo inválido! Considerando PASSO = 1')
            passo=1
        }
        if (inicio < fim) {
            for (var c = inicio; c <= fim; c+=passo) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (var c = inicio; c >= fim; c -= passo){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}