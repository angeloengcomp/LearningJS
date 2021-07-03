// while -------------------

// gera num randomico
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return parseInt(r);
}

// inicia a variavel
let numRandom = random(1, 50);


// while(numRandom !== 10){
// numRandom = random(1, 50);
//     console.log(numRandom);
// }

console.log('#############')


// do while -----------------
do {
    numRandom = random(1, 50);
    console.log(numRandom)
} while (numRandom !== 10);