function missingReindeer(ids) {
    return ids.sort((a, b) => a - b).filter((e, i) => i === e).length
}

console.log(missingReindeer([0, 2, 3])) // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])) // -> 4
console.log(missingReindeer([0, 1])) // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])) // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1, 10])) // -> 8
console.log(missingReindeer([0])) // -> 1 (¡es el último el que falta!)