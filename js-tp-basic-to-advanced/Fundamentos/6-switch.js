const data = new Date()

const diaSemana = data.getDay();

function diaSemanaTexto(dataValue){
    let diaSemana;

    switch(dataValue){    
        case 0:
            diaSemana = 'Domingo'
            return diaSemana;
        case 1:
            diaSemana = 'Segunda-feira'
            return diaSemana;
        case 2:
            diaSemana = 'Terça-feira'
            return diaSemana;
        case 3:
            diaSemana = 'Quarta-feira'
            return diaSemana;
        case 4:
            diaSemana = 'Quinta-feira'
            return diaSemana;
        case 5:
            diaSemana = 'Sexta-feira'
            return diaSemana;
        case 6:
            diaSemana = 'Sábado'
            return diaSemana;   
       
    }

}

const diaSemanaSaida = diaSemanaTexto(diaSemana)

console.log(`Hoje é ${diaSemanaSaida}`)
