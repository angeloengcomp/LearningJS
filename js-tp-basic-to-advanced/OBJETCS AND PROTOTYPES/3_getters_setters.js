// get obter valor e set setar valor

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,

        get: function () {
            return estoque
        },

        set: function (valor) {
            estoque = valor
        }

    })

}
