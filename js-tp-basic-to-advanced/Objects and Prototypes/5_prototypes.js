function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomecompleto = () => { return `${this.nome} ${this.sobrenome}` }
}

Pessoa.prototype.nomeInvertido = () =>{
    return `${this.sobrenome} ${this.nome}`
}

const pessoa1 = new Pessoa('angelo ricardo', 'dos anjos')
const pessoa2 = new Pessoa('jon castiel', 'almeida dos anjos')

console.log(pessoa1.nomecompleto())
console.dir(pessoa1)

console.log(pessoa1.nomeInvertido('João', 'Araujo'))


