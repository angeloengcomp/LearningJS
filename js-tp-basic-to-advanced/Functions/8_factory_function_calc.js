function Calculadora() {
    this.display = document.querySelector('.display');
    
    // metodos
    this.addNumDisplay = el => this.display.value += el.innerText;
    this.clearDisplay = () => this.display.value = '';
    this.delChar = () => this.display.value = this.display.value.slice(0, -1);
    this.inicia = () => this.capturaClicks();

    this.capturaClicks = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) {
                this.addNumDisplay();
            }
            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

        })
    };



};

const calculadora = new Calculadora();
calculadora.inicia();