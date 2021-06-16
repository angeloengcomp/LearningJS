// converte string para array

const stringNumeros = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10'
const arrayNumeros = stringNumeros.split(',')
console.log(arrayNumeros) // ['1', ' 2', ' 3', ' 4', ' 5', ' 6', ' 7', ' 8', ' 9', ' 10']

const stringNomes = 'angelo ricardo dos anjos'
const arrayNomes = stringNomes.split(' ')
console.log(arrayNomes) // [ 'angelo', 'ricardo', 'dos', 'anjos' ]