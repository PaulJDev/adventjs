function canReconfigure(from, to) {
    const crossData = (str1, str2) => {
        return [...str1].reduce((a, c, i) => {
            if (c !== str2[i]) a[c] = str2[i]
            return a
        }, {})
    }

    return Object.keys(crossData(from, to)).length === Object.keys(crossData(to, from)).length
}

function canReconfigure2(from, to) {
  if (from.length !== to.length) return false
  return new Set(from).size === new Set(to).size
}
  
let from = 'BAL'
let to   = 'LIB'
console.log(canReconfigure(from, to)) // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

from = 'CON'
to   = 'JUU'
console.log(canReconfigure(from, to)) // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

from = 'MMM'
to   = 'MID'
console.log(canReconfigure(from, to)) // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

from = 'AA'
to   = 'MID'
console.log(canReconfigure(from, to)) // false -> no tiene la misma longitud

from = 'xxxMMM'
to   = 'aaaDDD'
console.log(canReconfigure(from, to)) //true

from = 'aaaDDDmmm'
to   = 'aaaDDDmmm'
console.log(canReconfigure(from, to)) //true

from = 'xxxqqqeeefffggg'
to   = 'xxxqqqeeefffgg'
console.log(canReconfigure(from, to)) //false

from = 'abcdefghijkl'
to   = 'lkjihgfedcba'
console.log(canReconfigure(from, to)) //true
