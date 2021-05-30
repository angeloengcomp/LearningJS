function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate()); 
    const mes = zeroAEsquerda(data.getMonth()+1);
    const ano =zeroAEsquerda(data.getFullYear()) ;
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());

    return `${dia}/${mes}/${ano} ${hora}:${min}`
}

const data = new Date();//hora atual formato americano
const dataBrasil = formataData(data);

console.log(dataBrasil)

