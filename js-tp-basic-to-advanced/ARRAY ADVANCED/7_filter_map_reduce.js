// filtrar pares 
//dobrar o valor dos numeros pares
//reduzir somar tudo

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const numerosPares = numeros.filter(num => num % 2 === 0)

const numerosParesDobrados = numerosPares.map(num => num * 2)

const numerosParesDobradosSomados = numerosParesDobrados.reduce((ac, valor) => ac + valor)


console.log(numerosPares) // [ 2, 4, 6, 8, 10, 12 ]
console.log(numerosParesDobrados) //[ 4, 8, 12, 16, 20, 24 ]
console.log(numerosParesDobradosSomados)//84