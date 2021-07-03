const produto = {
    nome: 'caneca',
    preco: 5
}

const produtoCopiado = {
    ...produto,
    tipo: 'porcelana'
}

// ou

const produtoCopiado2 = Object.assign(
    {},
    produto,
    {
        tipo: 'vidro'

    })
    
console.log(produto)
console.log(produtoCopiado2)
console.log(produtoCopiado)