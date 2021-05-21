const randomNumbers = [ 12 , 324, 123, 45, 1234, 43631, 2]

const numberGreaterThan324 = randomNumbers.filter(number => number > 324)

console.log(numberGreaterThan324)

// ------------------------------

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ]

const usersPremium = users.filter(user => user.premium )

console.log(usersPremium)