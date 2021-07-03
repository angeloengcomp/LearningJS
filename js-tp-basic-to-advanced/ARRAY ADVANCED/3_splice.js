const frutas = ['mamao', 'pera', 'uva', 'laranja', 'maça', 'banana']

// splice(indice, qnddRemovida e ou adicionada, item a ser adicionado)

frutas.splice(2,0,'açaí') //insere açaí no indice 2

const frutaRemovida = frutas.splice(-1,1)

console.log(frutas, frutaRemovida)