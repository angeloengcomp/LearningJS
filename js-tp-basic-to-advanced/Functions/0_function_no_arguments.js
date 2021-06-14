function exibe (){
    console.log(`Valor na posição 2: ${arguments[1]} / Quantidade de Argumentos: ${arguments.length}`);//um
    for(let valores of arguments){
        console.log(valores)
    }
};

exibe('zero','um','dois','três','quatro','cinco', 'seis');
