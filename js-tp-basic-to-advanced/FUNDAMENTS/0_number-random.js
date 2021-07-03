
let numeroAleatorio = document.getElementById('numero-aleatorio')

console.log(numeroAleatorio);

function gerarNumeroAleatorio()    {
    numeroAleatorio.innerHTML = parseInt(Math.random()*(10)+1);

}

