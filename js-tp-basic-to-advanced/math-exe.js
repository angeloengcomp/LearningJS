//prompt recebe um valor
const numero = prompt('Digite um numero');

//seleciono o valor do id dentro do documento
numeroEscolhido = document.getElementById('numero-escolhido');

//troco o valor do id do documento pelo valor recebido no prompt
numeroEscolhido.innerHTML = numero;