function* geradora() {

    //codigo 1
    yield 'valor 1'

    //codigo 2
    yield 'valor 2'

    //codigo 3
    yield 'valor 3'

}

const g1 = geradora()

// console.log(g1.next().value)//valor 1
// console.log(g1.next().value)//valor 2
// console.log(g1.next().value)//valor 3

for (let valor of g1) {
    console.log(valor)
    // valor 1
    // valor 2
    // valor 3
}


// funções geradoras que controlam outras funções geradoras e/ou não geradoras------------------------------

function* geradora2() {
    yield 0
    yield 1
    yield 2
}

function naoGeradora(){
    return 3
}

function* geradora3() {
    yield* geradora2()// 0 1 2
    yield naoGeradora()//3
    yield 4
    yield 5
}

const g3 = geradora3()

for (let valor of g3) {
    console.log(valor)
    // 0
    // 1
    // 2
    // 3
    // 4
    // 5
}
