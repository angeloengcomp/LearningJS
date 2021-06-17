const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const numerosDobrados = numeros.map(num => num * 2)

console.log(numerosDobrados)// [2, 4, 6, 8, 10, 12, 14, 16, 18]

const pessoas = [
    { nome: 'angelo', idade: 26 },
    { nome: 'mary', idade: 28 },
    { nome: 'jon', idade: 4 },
    { nome: 'eunice', idade: 48 },
    { nome: 'mãe', idade: 49 },
]

const apenasNomes = pessoas.map(obj => obj.nome)
console.log(apenasNomes)

const idades = pessoas.map(obj => obj.idade)
console.log(idades)

const novoID = pessoas.map((obj, indice) => {
    const novoObj = { ...obj };
    novoObj.id = indice;
    return novoObj
})

console.log(pessoas)
// [
//     { nome: 'angelo', idade: 26 },
//     { nome: 'mary', idade: 28 },
//     { nome: 'jon', idade: 4 },
//     { nome: 'eunice', idade: 48 },
//     { nome: 'mãe', idade: 49 }
// ]
console.log(novoID)
// [
//     { nome: 'angelo', idade: 26, id: 0 },
//     { nome: 'mary', idade: 28, id: 1 },
//     { nome: 'jon', idade: 4, id: 2 },
//     { nome: 'eunice', idade: 48, id: 3 },
//     { nome: 'mãe', idade: 49, id: 4 }
// ]