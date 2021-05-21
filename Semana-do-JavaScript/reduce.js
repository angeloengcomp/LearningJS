const numbers = [1, 2, 3]

const sumNumbers = numbers.reduce((accumalator, item) => accumalator + item, 0)

console.log(sumNumbers)

// ------------------------------------



const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
]

const scoreRogermelo = phaseScores.reduce((accumalator, phaseScore) => {
    if (phaseScore.name === 'Roger Melo') {
        accumalator += phaseScore.score
    }
    return accumalator

}, 0)
console.log(scoreRogermelo)