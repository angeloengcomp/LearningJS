function retornaHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR');
};

console.log(retornaHora());//output: 16:28:23

