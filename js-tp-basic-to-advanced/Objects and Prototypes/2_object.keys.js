function Carro (marca, estado, preco){
    this.marca = marca
    this.estado = estado
    this.preco = preco
}

const c1 = new Carro('Mercedes', 'novo', 90000)

console.log(Object.keys(c1))//exibe somente as chaves

// ||

for (let chave in c1) console.log(chave) //tbm exibe somente as chaves