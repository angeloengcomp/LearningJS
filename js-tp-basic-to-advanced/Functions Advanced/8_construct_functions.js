// função construtora e função fábrica para objetos

function Pessoa(nome, sobrenome){
    // Pessoa.nome = nome;
    this.nome = nome
    this.sobrenome = nome

    this.falaOi = () => {
        console.log(`${this.nome} fala oi`)
    }

}

const p1 = new Pessoa('Angelo Ricardo', 'dos Anjos')
console.log(p1.nome)//Angelo Ricardo
p1.falaOi()//Angelo Ricardo fala oi
