// escreva uma função que recebe um numero
// e retorna o seguinte:
// numero é divisivel por 3 = Fizz
// numero é divisivel por 5 = Buzz
// numero é divisivel por 3 e 5 = FizzBuzz
// numero não é divisivel por 3 e 5 retorna o proprio numero
// checar se o numero é realmente um numero retorna o proprio numero
// use a funcao com numeros de 0 a 100

function fizzBuzz(numero) {
    let valor = undefined;
    let r = undefined;

    if (numero % 3 === 0) r = 'Fizz';
    if (numero % 5 === 0) r = 'Buzz';
    if (numero % 3 === 0 && numero % 5 === 0) r = 'FizzBuzz';
    if (numero % 3 != 0 && numero % 5 != 0) r = numero;
    if (Number.isInteger(numero)) valor = numero;

    return console.log(valor, r);
};

for (let i = 1; i <= 100; i++) {
    fizzBuzz(i);
}
