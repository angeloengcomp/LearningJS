function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false,

        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: false,
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false,
        },
    })
}