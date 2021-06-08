const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

inputTarefa.addEventListener('keypress', function(e){
    console.log(e);
    if(inputTarefa.ke)
})


function criaTarefa(textoInput) {
    const li = document.createElement('li');//cria elemento li
    li.innerText = textoInput;//elemento li recebe o textinput
    tarefas.appendChild(li);//tarefas recebe um filho li com o textInput
}

btnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return; //verifica se existe um valor no input para poder executar o resto
    criaTarefa(inputTarefa.value);
});