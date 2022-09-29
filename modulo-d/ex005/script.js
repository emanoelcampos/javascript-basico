function calcularTabuada() {
    var numero = Number(document.getElementById('numero').value)
    var tabuada = document.getElementById('tabuada')

    if (numero == 0) {
        alert('Por favor, digite um número!')
    } else {
        tabuada.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
        item.text = `${numero} x ${c} = ${numero*c}`
        item.value = `tabuada${c}`
        tabuada.appendChild(item)
        }
    }
}
