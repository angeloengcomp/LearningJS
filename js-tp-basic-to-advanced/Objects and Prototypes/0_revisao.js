const pessoa = {
    nome: 'luiz', sobrenome: 'otavio'
}

// outra forma de declarar um objeto

const pessoa1 = new Object()
pessoa1.nome = 'angelo'
pessoa1.sobrenome = 'ricardo'

// função fabrica de objetos --------------------------------
function fabricaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() { return `${this.nome} ${this.sobrenome}` }
    }
}

const pessoaFabricada = fabricaPessoa('Pessoa', 'Fabricada')
console.log(pessoaFabricada)
console.log(pessoaFabricada.nomeCompleto)



console.log('------------------------')
//função construtora de objetos ------------------------------

function Constroipessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => `${nome} ${sobrenome}`
}

const pessoaConstruida = new Constroipessoa('Pessoa', 'Construida')
console.log(pessoaConstruida)
console.log(pessoaConstruida.nomeCompleto())