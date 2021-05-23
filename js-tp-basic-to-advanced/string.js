//               01234567
let umaString = "Um texto"

console.log(umaString[4])//exibe o caractere na posição 4 = e

console.log(umaString.charAt(4))//exibe o caractere na posição 4 = e


console.log(umaString.indexOf('texto'))//diz o indice que começa essa palavra = 3
console.log(umaString.lastIndexOf('texto'))//diz o indice que começa essa palavra, porém começa a procurar de trás pra frente = 3

console.log(umaString.search('exto'))//encontra o indice de um pedaço específico da string = 4

console.log(umaString.replace('Um', 'Aquele'))//substitui um pedaço da string = "Aquele texto"

console.log(umaString.length)//tamanho da string = 8

console.log(umaString.slice(0,3))//me diz um pedaço da string referemte ao indice 1 - 7 = "Um"

console.log(umaString.split('',5))
console.log(umaString.split('')) //divide a string em todos os valores indicadores

console.log(umaString.toUpperCase()) //td maiusculo
console.log(umaString.toLowerCase()) //td minusculo

