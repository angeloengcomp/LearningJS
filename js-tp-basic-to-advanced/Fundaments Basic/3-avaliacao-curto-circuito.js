// RETORNAM FALSO
// '' " " NaN null undefined 0 false

// A EXECUÇÃO PARA QUANDO A CHECAGEM ENCONTRA UM VALOR false, OS OUTROS VALORES NÃO SÃO VERIFICADOS

// '' != ' ' -> vazio retorna false, espaço não é vazio

console.log('maria' && null && 'joao')//null
console.log('oi' && undefined && '1')// undefined
console.log('' && 'angelo' && 1 && true)// ''

const a = 0
const b = false
const c = ''
const d = 'false'
const e = NaN

console.log( a||b||c||d||e)//retorna um valor verdadeiro, a string 'false'