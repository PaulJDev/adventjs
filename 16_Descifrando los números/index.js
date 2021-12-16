function decodeNumbers(symbols) {
    const dict = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 }

    return symbols.split('').reduce((t, c, i, arr) => {
        if (dict[arr[i]] < dict[arr[i + 1]]) return t - dict[c]
        return t + dict[c]
    }, 0)
}


console.log(decodeNumbers('...')) // 3
console.log(decodeNumbers('.,')) // 4 (5 - 1)
console.log(decodeNumbers(',.')) // 6 (5 + 1)
console.log(decodeNumbers(',...')) // 8 (5 + 3)
console.log(decodeNumbers('.........!')) // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers('.;')) // 49 (50 - 1)
console.log(decodeNumbers('..,')) // 5 (-1 + 1 + 5)
console.log(decodeNumbers('..,!')) // 95 (1 - 1 - 5 + 100)
console.log(decodeNumbers('.;!')) // 49 (-1 -50 + 100)
console.log(decodeNumbers('!!!')) // 300
console.log(decodeNumbers(';!')) // 50*/
console.log(decodeNumbers(';.W')) // NaN