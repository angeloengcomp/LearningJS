const pessoa = {
    nome: 'luiz',
    sobrenome: 'Santos',
    idade: 23,

    // metodo do objeto pessoa
    fala(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos`)
    }
}

console.log(pessoa.idade)


// função factory
function criaPessoa (nome, sobrenome, idade){
    return {
        nome, sobrenome,idade

        // mesmo que:
        // nome:nome,
        // sobrenome:sobrenome,
        // idade:idade,

    }

}

const pessoa1 = criaPessoa('Anderson', 'Silva', 34)
const pessoa2 = criaPessoa('Julio', 'Alencar', 21)

console.log(pessoa1)
console.log(pessoa2)

// método do objeto pessoa
pessoa.fala()