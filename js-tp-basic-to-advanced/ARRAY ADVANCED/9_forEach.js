// forEach disponível apenas em arrays

const frutas = ['maçã', 'pera', 'banana', 'açaí', 'manga']

// padrão
for (let valor of frutas) console.log(valor)

// forEach
frutas.forEach((valor, indice) => console.log(valor, indice))
