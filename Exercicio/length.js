src='index.js'

if((nome.length)<=6){
    document.body.innerHTML += `<h2 class="scr">O Nome tem um tamanho razoavel, de 6 ou menos caracteres.</h2>`
}
else{
    document.body.innerHTML += `<h2 class="scr">O nome tem um tamanho SUPERIOR a de 6 caracteres.</h2>`
}

document.body.innerHTML += `<h2 class="scr">Ele possui ${nome.length} caracteres.</h2>`