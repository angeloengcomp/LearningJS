let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero == 2) continue;// pula o numero 2

    console.log(numero);//exibe a sequencia de numeros do array menos o 2
};

let nomes = ['angelo', 'jon', 'mary', 'aurora'];

for( let nome of nomes){
    if (nome === 'aurora') break;//para na aurora e encerra o processo
    console.log(nome); //exibe somente até a mary
};