class Humano{
    constructor(sexo){
        this.sexo = sexo
        this.reproduz = true
        this.filhos = 0
    }

    // metodo de instancia
    maxFilhos(value){
        this.filhos = value
    }

    // pode ser executado apenas pelo Humano
    static paraReproducao (){
        this.filhos = 0;
        this.reproduz = false
    }
}

const h1 = new Humano('masculino')

h1.maxFilhos(3)

// h1.paraReproducao() ERROR

Humano.paraReproducao();

console.log(Humano)
console.log(h1)

