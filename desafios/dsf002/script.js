function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = '' 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'imagens/criança-h.png')
            }
            else if (idade >= 11 && idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-h.png')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-h.png')
            }  
            else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-h.png')
            }     
        } 
        
        else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'imagens/criança-m.png')
            }
            else if (idade >= 11 && idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulta-m.png')
            }             
            else {
                //idoso
                img.setAttribute('src', 'imagens/idosa-m.png')
            }
        }


        res.innerHTML = `Detectamos: ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}