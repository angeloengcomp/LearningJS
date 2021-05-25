const listaNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(Array.isArray(listaNumeros)) // diz se é um array = true

listaNumeros.length // tamamho do array 

listaNumeros.push(10,11,12) // adiciona elemento no fim do array

listaNumeros.unshift(-1)//adiciona no começo do array

listaNumeros.pop()//remove elemento do final do array

listaNumeros.shift()//remove o primeiro elemento do array

console.log(listaNumeros.slice(8,11))//mostra uma fatia do indice 8 ao indice 10

delete listaNumeros[3]// remove o elemento do indice 3

console.log(listaNumeros)


