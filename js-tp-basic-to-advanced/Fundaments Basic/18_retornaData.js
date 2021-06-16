function retornaData(){
    let data = new Date();
    return data.toLocaleDateString('pt-BR');
};

console.log(retornaData());//07/06/2021
