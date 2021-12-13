function sumPairs(numbers, result) {
    if (numbers.length == 0) return null
      const num1 = numbers.shift()
      const num2 = numbers.filter(e => e + num1 === result)[0]
      if (!num2) {
        return sumPairs(numbers, result)
      }
    return [num1, num2]
}

console.log(sumPairs([3, 5, 7, 2], 10)) // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10))// null
console.log(sumPairs([2, 2, 3, 1], 4))// [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8))// [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6))// [1, 5]