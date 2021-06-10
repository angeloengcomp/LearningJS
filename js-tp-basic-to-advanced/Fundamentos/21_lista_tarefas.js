const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBtnApagar(li){
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    li.appendChild(botaoApagar);

}

function criaTarefa(textoInput) {
    const li = document.createElement('li');//cria elemento li
    li.innerText = textoInput;//elemento li recebe o textinput
    tarefas.appendChild(li);//tarefas recebe um filho li com o textInput

    limpaInput();
    criaBtnApagar(li)
}

btnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return; //verifica se existe um valor no input para poder executar o resto
    criaTarefa(inputTarefa.value);
});