
// funções async são uma sintaxe sugar para entregar promisses


async function add(firstNumber, secondNumber) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        throw `firstNumber and secondNumber must be numbers`
    }

    return firstNumber + secondNumber
}

// console.log(add('10',10)) //retorna uma promisse rejected
// console.log(add(10,10)) // retorna uma promisse resolve


// usando o await

const url = 'https://jsonplaceholder.typecode.com/users'


async function getPosts() {
    
    try {
        // com o await o console.log só sera executado qnd a constante resposta tiver um valor nao importa qnt tempo demore
        const resposta = await fetch(url)
        console.log(resposta)
        
    } catch (error) {
        console.log('peguei você', error)
    }
}

getPosts()