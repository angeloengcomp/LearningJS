const frutas = ['maçã', 'pera', 'banana', 'uva'];

for (let i in frutas) {
    console.log(frutas[i]);//output maçã pera banana uva
};

const pessoa = {
    nome: 'Angelo', idade: 26, peso: 72, altura: 1.74
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
    // output
    // nome Angelo
    // idade 26
    // peso 72
    // altura 1.74
};

//            012345           
const nome = 'Angelo';

for (let i in nome) {
    console.log(nome[i]);//output a n g e l o
};
