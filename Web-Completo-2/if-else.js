// if( 2 == '2'){
//     console.log('Sim são iguais')
// }
const media = 5

let nota1 = 5
let nota2 = 9
let nota3 = 2

function calculaMedia(a,b,c){
    return (a+b+c)/3
}
function aprovado(nota1, nota2, nota3){
    if(calculaMedia(nota1,nota2,nota3)>= media){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}

aprovado(nota1,nota2,nota3)



