try {
    // é executada quando não há erros
} catch (e) {
    // é executado quando há erros
} finally {
    // sempre é execudado com ou sem erros
}


try {
    console.log(varInexistent)
} catch (err) {
    console.log('varInexistente Não Existe')
    console.log(err)//err mostra o log do erro
}


