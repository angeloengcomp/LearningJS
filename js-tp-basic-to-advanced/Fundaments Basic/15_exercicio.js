//escreva uma função que recebe dois numeros e exibe o maior deles

function maiorNum(num1, num2) {
    let r = num1 > num2 ? num1 : num2;
    return r;
};

const maiorNumArronFunc = (x, y) => x > y ? x : y;

let maior = maiorNum(1, 15);
let maior2 = maiorNumArronFunc(21, 15);

console.log(maior);
console.log(maior2);