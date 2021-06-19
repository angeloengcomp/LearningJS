// defineProperty e defineProperties

function Produto (nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    // para somente um atributo
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //msotra chave
        value: estoque, //mostra valor
        writable: false, // altera valor
        configurable: false // reconfigurar
    })
}

const p1 = new Produto('laranja', 1, 5)

console.log(p1.estoque)