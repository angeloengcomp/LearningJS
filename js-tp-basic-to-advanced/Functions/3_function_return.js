
function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
};

const duplica = criaMultiplicador(2);
//function (n) { return n * ultiplicador;};

const triplica = criaMultiplicador(3);
//function (n) { return n * ultiplicador;};

const quadriplica = criaMultiplicador(4);
//function (n) { return n * ultiplicador;};

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));