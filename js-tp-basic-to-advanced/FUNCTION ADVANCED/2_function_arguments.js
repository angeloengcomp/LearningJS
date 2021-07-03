function nomes(nome1, ...rest) {
    console.log(nome1, ...rest);
};

const retornaNomes = (...nomes) => console.log(...nomes);

nomes('angelo','mary','jon','ray','maria');;
retornaNomes('angelo','mary','jon','ray','maria','joão','etc...');
