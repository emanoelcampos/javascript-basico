var numero = document.getElementById('numero')
var valorLista = document.getElementById('valor')
var resultado = document.getElementById('resultado')
var listaNumeros = []

function isNumero (numero) {
    if (Number(numero) >= 1 && Number(numero) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (numero, listaNumeros) {
    if (listaNumeros.indexOf(Number(numero)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, listaNumeros)) {
         listaNumeros.push(Number(numero.value))
         let item = document.createElement('option')
         item.text = `Valor ${numero.value} adicionado.`
         valorLista.appendChild(item)
         resultado.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (listaNumeros == 0) {
        alert('Adicione valres antes de finalizar')
    } else {
        let total = listaNumeros.length
        let maior = listaNumeros[0]
        let menor = listaNumeros[0]
        let soma = 0
        let media = 0
        for (let i in listaNumeros) {
            soma += listaNumeros[i]
            if (listaNumeros[i] > maior)
            maior = listaNumeros[i]
            if (listaNumeros[i] < menor)
            menor = listaNumeros[i]
        }
        media = soma / total
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}