function listGifts(letter) {
    return letter.split(' ').filter(e => e && !e.includes('_')).reduce((t, c) => {
      t[c] = (t[c] || 0) + 1
      return t
    }, {})
}

const carta = 'bici coche balón _playstation bici coche peluche'

const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/