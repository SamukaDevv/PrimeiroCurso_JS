function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
           gênero = 'Homem'
           if(idade >=0 && idade < 12){
                //Criança
                img.setAttribute('src', 'Chomem.png')
           } else if (idade < 25){
                //Jovem
                img.setAttribute('src', 'Jhomem.png')
           } else if (idade < 45){
                //Adulto
                img.setAttribute('src', 'Ahomem.png')
           } else {
                //Idoso
                img.setAttribute('src', 'Ihomem.png')
           }
        } else if(fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade < 12){
                //Criança
                img.setAttribute('src', 'Cmulher.png')
           } else if (idade < 25){
                //Jovem
                img.setAttribute('src', 'Jmulher.png')
           } else if (idade < 45){
                //Adulto
                img.setAttribute('src', 'Amulher.png')
           } else {
                //Idoso
                img.setAttribute('src', 'Imulher.png')
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}