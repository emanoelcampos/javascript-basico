// 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(numero) {
    let fat = 1
    for (let i = numero; i > 1; i--) {
        fat *= i
    }
    return fat
}

console.log(fatorial(5))

