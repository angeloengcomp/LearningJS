class Dispositivo {
    constructor(nome, ref) {
        this.nome = nome
        this.ref = ref
        this.ligado = false

    }

    ligar() {
        if (this.ligado) {
            console.log("dispositivo ja ligado")
            return
        }
        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log('dispositivo ja desligado')
            return
        }
        this.ligado = false
    }
}

// criar um filho com todos as funcionalidades do pai
class Smartphone extends Dispositivo {
    constructor(nome, ref, cor, modelo) {
  
        // puxa os parametros da classe pai
        super(nome, ref)
  
        this.cor = cor
        this.modelo = modelo

    }
};

const s1 = new Smartphone('Iphone', 57241, 'branco', '10 S');

console.log(s1)