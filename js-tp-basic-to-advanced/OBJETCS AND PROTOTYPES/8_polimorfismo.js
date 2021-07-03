function Conta(agencia, conta, saldo) {
    this.agencia = agencia, this.conta = conta, this.saldo = saldo
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function () {
    console.log(`Agencia: ${this.agencia}/Conta: ${this.conta}/Saldo: ${this.saldo.toFixed(2)}`);
}

const conta1 = new Conta(11,22,10);

console.log(conta1);

conta1.depositar(11);
conta1.sacar(11);

function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);

}

// polimorfismo habilidade de rescrever o metodo-------------------

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){
    //sobrescrever a
}