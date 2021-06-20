function Produto(nome, preco) {
    this.preco = preco
    this.nome = nome
}

Produto.prototype.aumento = function (valor) {
    return this.preco += valor
}

Produto.prototype.desconto = function(valor){
    return this.preco -= valor
}

// filho de produto--------------------------

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)//recebe nome e preco de Produto
    this.cor = cor
}

const produto = new Produto('Computador', 2300)
const camiseta = new Camiseta('Regata', 80, 'blue')

// Object.creat vai pegar o prototype de produto e incluir ao seu filho camiseta, para que usemos seus metodos
Camiseta.prototype = Object.create(Produto.prototype);

// isso é para que o objeto não perca seus parametros principais como construtor
Camiseta.prototype.constructor = Camiseta;

console.log(camiseta.desconto(20))



 
