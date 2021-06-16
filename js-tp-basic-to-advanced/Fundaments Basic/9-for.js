for (let i = 0; i <= 5; i++) {

    let resultado = i % 2 === 1 ? 'impar' : 'par';

    if (i === 0) resultado = 'neutro';

    console.log(`o número ${i} é ${resultado}.`)
}

const nomes = ['angelo', 'eunice', 'jon', 'mary', 'marcela'];

for (let f = 0; f < nomes.length;f++){
    console.log(nomes[f]);
}
