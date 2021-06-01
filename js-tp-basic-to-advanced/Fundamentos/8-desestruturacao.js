// let a = '1';
// let b = '2';
// let c = '3';

// const numeros = [1, 2, 3];
// [a, b, c] = numeros; // a=1,b=2,c=3

let sequencia = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

let [letra1, letra2, ...restoDasLetras] = sequencia;

console.log(letra1, letra2);
console.log(restoDasLetras);

let listaNumeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

let [lista1, lista2, lista3] = listaNumeros;

console.log(lista2[2]);//6