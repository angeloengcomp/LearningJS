// array de objetos
const elementos = [
    { tag: 'p', texto: 'frase 0' },
    { tag: 'div', texto: 'frase 1' },
    { tag: 'footer', texto: 'frase 2' },
    { tag: 'section', texto: 'frase 3' }
];

// seleciona o elemento container
const container = document.querySelector('.container');

// criar div
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    const {tag, texto} = elementos[i];//console.log(tag) = somente as tags
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    div.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);
