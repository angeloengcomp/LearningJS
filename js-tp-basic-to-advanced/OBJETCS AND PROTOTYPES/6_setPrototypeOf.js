function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual/100))
}

const p1 = new Produto('Camisete', 500)


p1.desconto(20)

console.log(p1)//Produto { nome: 'Camisete', preco: 400 }

// objeto literal
const p2 = {
    nome: 'calça',
    preco: 90
}

Object.setPrototypeOf(p2, Produto.prototype)

p2.desconto(100)

console.log(p2)//Produto { nome: 'calça', preco: 0 }
