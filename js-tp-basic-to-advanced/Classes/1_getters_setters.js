const _velocidade = Symbol('velocidade')
class Carro {
    construdctor(nome) {
        this.nome = 'fusca';
        this[_velocidade] = 0;
    }

    set velocidade(valor){
        if(typeof valor != 'number') return;
        if(valor <=  0 || valor > 100) return;

        this[_velocidade] = valor;
    }

    get velocidade(){
        return this[_velocidade];
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    frear() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
} 

const c1 = new Carro('fusca');

// estou mandando para o setter verificiar se a velocidade é valida para ser armazenada
c1.velocidade = 99;

console.log(c1.velocidade)