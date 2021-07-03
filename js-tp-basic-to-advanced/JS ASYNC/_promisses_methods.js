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

//Promise.all Promise.race 

const promises = [
    esperaAi('Promisse1', 3000),
    esperaAi('Promisse mais rapida', 500),
    esperaAi('Promisse3', 1000),
]

Promise.all(promises).then(valor => {
    console.log(valor)
})

// entrega somente o primeiro valor a ser e solvido o de 500 milisegundos
Promise.race(promises).then(valor => {
    console.log(valor)
})

