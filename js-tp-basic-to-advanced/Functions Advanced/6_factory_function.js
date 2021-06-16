// função fábrica de objetos

function criapessoa(nome, sobrenome, peso, altura) {
    return {
        nome: nome,
        sobrenome,
        peso,
        altura,

        fala(assunto) {
            return `${this.nome} esta ${assunto}`;
        },



        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' '); //divide a string entre seus espaços e cria um array.
            this.nome = valor.shift();// pega o primeiro valor do array, atribui a this.nome e remove esse valor do array
            this.sobrenome = valor.join(' '); // pega o resto do nome e atribui ao sobrenome.
        },

        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
};


const p1 = criapessoa('Angelo', 'Ricardo', 73, 1.73);
console.log(p1.nomeCompleto());//Angelo Ricardo
p1.nomeCompleto = 'Maria Silva Cardoso';
console.log(p1.nome);//Maria
console.log(p1.sobrenome);//Silva Cardoso
console.log(p1.nomeCompleto); // Maria Silva Cardoso
