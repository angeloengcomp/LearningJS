// controla timers

function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR');//retorna hora em pt-BR

}

function funcInterval() {
    console.log(mostraHora())
}


const timer = setInterval(funcInterval, 1000);//executa a cada 1000 milisecundos;

setTimeout( function(){
    clearInterval(timer)
},5000);//para de executar a função timer após 5.000 milisecundos, 5 segundos