function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') reject('BAD VALUE')
        setTimeout(() => {
            resolve(msg)
        }, tempo)

    })

}



esperaAi('conecting with Database...', rand(1, 3)).then(resposta => {
    console.log(resposta)
    return esperaAi('Search data...', rand(1, 3))
}).then(resposta => {
    console.log(resposta)
    return esperaAi('Data processing', rand(1, 3))
}).then(resposta => {
    console.log(resposta)
    return esperaAi('Finishing', rand(1, 3))
}).catch(e => {
    console.log('ERRO', e)
})

console.log('será exibido antes de qualquer promisse')

