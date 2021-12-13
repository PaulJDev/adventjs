function wrapGifts(gifts) {
    if (gifts.length === 0) return []
    gifts = gifts.map(e => `*${e}*`)  
    return ['*'.repeat(gifts[0].length), ...gifts, '*'.repeat(gifts[0].length)]
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