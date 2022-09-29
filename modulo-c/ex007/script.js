function toCharge() {
    var message = document.getElementById('message')
    var image = document.getElementById('image')
    var date = new Date()
    var hour = date.toLocaleTimeString()
    time = setInterval(toCharge,1000)


    message.innerHTML = `Agora são <strong>${hour}</strong> horas.` 

   
    if (hour >= 0 && hour < 12) { // bom dia  
        image.src = 'images/morning-circle-250.png'     
        document.body.style.background='#86906d'

    }else if (hour >= 12 && hour <= 18) { // boa tarde
        image.src = 'images/afternoon-circle-250.png'
        document.body.style.background='#d4915a'

    }else { //boa noite
        image.src = 'images/night-circle-250.png'
        document.body.style.background='#5a7a9a'
    }
}



