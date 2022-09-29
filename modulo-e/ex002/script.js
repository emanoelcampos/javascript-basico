function parOuImpar (numero) {
    if (numero % 2 == 0) {
        return `O número ${numero} é par.`
    } else {
        return `O número ${numero} é ímpar.`
    }
}

let resultado = parOuImpar(10)
console.log(resultado)
