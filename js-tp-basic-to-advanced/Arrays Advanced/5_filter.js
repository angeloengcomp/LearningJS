const numeros = [5, 50, 20, 3, 90, 12, 34, 64, 79, 20, 13, 42, 56, 2, 1, 7,]

// argumentos aceitos (valor, indice, array)
const maior10 = valor => valor > 10

// retorne somente numeros maiores que 10
const numerosFiltrados = numeros.filter(maior10);


// console.log(numerosFiltrados)

// [
//     50, 20, 90, 12, 34,
//     64, 79, 20, 13, 42,
//     56
//   ]


const pessoas = [
    { nome: 'angelo', idade: 26 },
    { nome: 'mary', idade: 28 },
    { nome: 'jon', idade: 4 },
    { nome: 'eunice', idade: 48 },
    { nome: 'mãe', idade: 49 },
]

// function retornasNomes(obj){
//     if(obj.nome.length >= 5){
//         return obj.nome
//     }    
// }

const cincoLetras = pessoas.filter(obj => obj.nome.length >= 5)

const maiorQueQuarentaAnos = pessoas.filter(obj => obj.idade >= 40)

const nomeTerminaComN = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('n'))

console.log(cincoLetras)
console.log(maiorQueQuarentaAnos)
console.log(nomeTerminaComN)