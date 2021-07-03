const msg = 'olá mundo'

// cria um elemento div
const div = document.createElement('div');

// insere uma msg na div
div.innerHTML = msg

// insere uma classe na div
div.classList.add('nova-classe')


function criaErro(campo, msg) {
    
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');

    

    // insere uma div depois de um elemento que tenha a classe campo
    campo.insertAdjacentElement('afterend', div);
}


