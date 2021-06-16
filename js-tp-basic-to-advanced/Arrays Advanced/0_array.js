const frutas = ['uva', 'maçã', 'pera', 'banana amarela', 'abacaxi', 'morango']

frutas.pop() //delete o útimo elemento do array > morango
// frutas.shift() //deleta o primeiro elemento do array > uva

frutas.push('acerola') // adiciona acerola ao ultimo indice do array
// frutas.unshift('abacate') //adiciona abacate ao primeiro indice do array, empurando os demais

delete frutas[1] //deleta > maçã frutas[1]> <1 empty item>

frutas[3] = 'banana verde' //coloca banana verde no lugar de banana amarela

console.log(frutas) //[ 'uva', <1 empty item>, 'pera', 'banana verde', 'abacaxi', 'acerola' ]

const frutasCopia = [...frutas] //faz uma copia do array frutas

console.log(frutasCopia) //[ 'uva', undefined, 'pera', 'banana verde', 'abacaxi', 'acerola' ]