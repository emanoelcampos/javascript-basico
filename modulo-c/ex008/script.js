function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anoNasc')
    var result = document.getElementById('result')

    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 0) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) { //criança
                img.setAttribute('src', 'images/foto-bebe-m.png')
            } else if (idade < 21) { // jovem
                img.setAttribute('src', 'images/foto-jovem-m.png')
            } else if (idade < 50) { //adulto
                img.setAttribute('src', 'images/foto-adulto-m.png')
            } else { //idoso
                img.setAttribute('src', 'images/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) { //criança
                img.setAttribute('src', 'images/foto-bebe-f.png')
            } else if (idade < 21) { // jovem
                img.setAttribute('src', 'images/foto-jovem-f.png')
            } else if (idade < 50) { //adulto
                img.setAttribute('src', 'images/foto-adulto-f.png')
            } else { //idoso
                img.setAttribute('src', 'images/foto-idoso-f.png')
            }
        }
        result.innerHTML= `Detectamos ${genero} com ${idade} anos.`
        result.appendChild(img)
    }
}