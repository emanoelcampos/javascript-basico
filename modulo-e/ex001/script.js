let num = [5,8,6,2,1,3,4]

console.log(`O primeiro valor da posição de um vetor começa no [0] e no vetor 'num' o índice [0] tem elemento ${num[0]}`)

num[5] = 9

num.push(7)

console.log(num)

console.log(num.length)

console.log(num.sort())

console.log(num)

let num2 = [2,5,9,7,4,6]
for (let i = 0; i < num2.length; i++) {
    console.log(`A posição ${i} tem o valor ${num2[i]}`)
}
console.log()

let num3 = [5,4,8,9,6,2]
for (let i in num3) {
    console.log(`A posição ${i} tem o valor ${num2[i]}`)
}
