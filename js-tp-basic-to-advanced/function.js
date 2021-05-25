let palavra = 'Angelo';

function saudacao(nome) {
    console.log(`Oi ${nome}`);
}

saudacao(palavra);

function soma(x, y) {
    let resultado = x + y;
    return resultado;
}

console.log(soma(10, 10));

// função normal
const raiz = function (n) {
    return n ** 0.5;
}

console.log(raiz(36))

// arrow function
const double = num => num ** 2;

console.log(double(4))


