const data = new Date()

let diaSemanaValue = data.getDay();
let horaValue = data.getHours();
let minValue = data.getMinutes();

const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-Feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

let diaSemanaString = diasSemana[diaSemanaValue];

if (minValue < 10) minValue += `0`;

let resultadoString = `Hoje é ${diaSemanaString} e são ${horaValue} Horas e ${minValue} Minutos.`;


document.querySelector('#dia-hora').innerHTML = resultadoString ;



