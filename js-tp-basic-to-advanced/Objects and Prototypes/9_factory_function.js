function criaPessoa(nome, sobrenome) {
    // prototype das pessoas
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} fala`)
        },
        comer() {
            console.log(`${this.nome} come`)
        }
    }

    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}


const p1 = criaPessoa('angelo', 'anjos')
const p2 = criaPessoa('Jon','Castiel')

p1.falar()
p2.comer()