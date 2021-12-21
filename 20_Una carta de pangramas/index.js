function pangram(letter) {
  const include = /ñ/i.test(letter) ? 1 : 0
  return new Set(letter.toLowerCase().normalize('NFD').replace(/\p{Diacritic}|[^\w]/gu, '')).size + include === 27
}

function pangram1(letter) {
  const dict = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, '*': 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0 }
    letter
    .toLowerCase()
    .replace('ñ', '*')
    .normalize('NFD')
    .replace(/\p{Diacritic}|[^\w*]/gu, '')
    .split('')
    .forEach(e => dict[e] >= 0 ? dict[e]++ : '')
  return Object.values(dict).every(e => e > 0)
}

function pangram2(letter) {
  const dict = [...'abcdefghijklmnñopqrstuvwxyz']
  const include = /ñ/i.test(letter)
  return letter
    .toLowerCase()
    .normalize()
    .replace(/[^\w*]/gu, '')
    .split('')
    .every(e => dict.includes(e)) && include 
}

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vahò')) // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true)

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false
