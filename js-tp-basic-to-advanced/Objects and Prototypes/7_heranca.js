function Produto(nome, preco) {
    this.preco = preco
    this.nome = nome
}

Produto.prototype.aumento = function (valor) {
    this.preco += valor
}

Produto.prototype.desconto = function(desconto){
    this.preco -= desconto
}

// filho de produto--------------------------

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)//recebe nome e preco de Produto
    this.cor = cor
}

const camiseta = new Camiseta('Regata', 20)

// Object.creat vai pegar o prototype de produto e incluir ao seu filho camiseta, para que usemos seus metodos
Camiseta.prototype = Object.create(Produto.prototype)


 
