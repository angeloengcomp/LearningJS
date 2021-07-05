const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

// .concat()
const a3 = a1.concat(a2, [7, 8, 9]);
console.log(a3)//[1, 2, 3, 4, 5, 6, 7, 8, 9]

// ...rest ...spreed
const a4 = [...a1,...a2]
console.log(a4)//[1, 2, 3, 4, 5, 6, 7, 8, 9]
