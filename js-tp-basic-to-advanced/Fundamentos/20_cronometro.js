const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');


let data = new Date();
let time = data.




iniciar.addEventListener('click', function () {
    relogio.innerHTML = 'cliquei no iniciar';
});

pausar.addEventListener('click',function(){
    alert('click no pausar');

});

zerar.addEventListener('click', function(){
    alert('click no zerar');

});

