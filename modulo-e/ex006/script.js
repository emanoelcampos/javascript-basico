function fatorialRecursivo(numero) {
    if (numero == 1) {
        return 1
    } else {
        return numero * fatorialRecursivo(numero-1)
    }
}

console.log(fatorialRecursivo(5)); 