const pessoas = [
    { id: 3, nome: 'Jon' },
    { id: 2, nome: 'Angelo' },
    { id: 1, nome: 'Mary' }
]

for (const { id, nome } of pessoas) {
    console.log(id, nome)
}

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas)