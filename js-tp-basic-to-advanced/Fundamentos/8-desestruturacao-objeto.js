const pessoa = {
    nome: 'Jon Castiel',
    idade: 4,
    peso: 18,
    pais: {
        mae: 'Mariely Lima',
        pai: 'Angelo Anjos',

    },
}

const { mae, pai } = pessoa.pais;

const { nome, idade, peso, altura = '1,10m' } = pessoa;


console.log(`A criança ${nome} é filho de ${mae} e ${pai}, tem ${altura} de altura e pesa ${peso} kilos.`);