function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(desconto){
    this.preco = this.preco - desconto;
}


function Camiseta(nome, preco, tamanho, cor){
    Produto.call(this, nome, preco);
    this.tamanho = tamanho;
    this.cor = cor;

}

const camiseta = new Camiseta('regata', 99, 'G', 'black' )

Camiseta.prototype = Object.create(Produto.prototype)



console.log(camiseta)


