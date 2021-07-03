class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome,
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`${this.nome} fala`)
    }
    comer(){
        console.log(`${this.nome} come`)
    }
}

const p1 = new Pessoa('angelo', 'ricardo');
const p2 = new Pessoa('jon', 'castiel')

// não precisamos criar um prototipe, pois a instancia sempre chama o método do pai 
// ou seja, ele n cria um metodo no seu proprio prototipe = melhor desempenho

p1.falar()
p2.falar()

