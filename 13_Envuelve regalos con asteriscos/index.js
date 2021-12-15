function wrapGifts(gifts) {
    if (gifts.length === 0) return []
    gifts = gifts.map(e => `*${e}*`)
    const cover = '*'.repeat(gifts[0].length)  
    return [cover, ...gifts, cover]
}

console.log(wrapGifts(["📷", "⚽️"]))
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(["🏈🎸", "🎮🧸"]))
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(["📷"]))
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
