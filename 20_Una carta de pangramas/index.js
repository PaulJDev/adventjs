function pangram(letter) {
  const include = /ñ/i.test(letter) ? 1 : 0
  return new Set(letter
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^\w]/g, '')).size + include === 27
}

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vahò')) // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true)

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false