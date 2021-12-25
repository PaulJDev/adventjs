function canMouseEat(direction, game) {
    const y = game.length
    const x = game[0].length
    const moves = {
        up: -x,
        down: x,
        left: -1,
        right: 1
    }

    const room = game.flat()
    const posMouse = room.indexOf('m')
    const posCheese = room.reduce((a, c, i) => (c === '*' ? [...a, i] : a), []);

    if ((direction === 'up' || direction === 'down') && y === 1) return false
    if ((direction === 'left' || direction === 'right') && x === 1) return false
    if (direction === 'up' && Math.floor(posMouse/y) === 0) return false
    if (direction === 'domn' && Math.floor(posMouse/y) === y - 1) return false
    if (direction === 'left' && (posMouse%x) === 0) return false
    if (direction === 'right' && (posMouse%x) === x - 1) return false

    return posCheese.includes(posMouse + moves[direction])
}

const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
  ]

console.log(canMouseEat('up',    room))   // false
console.log(canMouseEat('down',  room))   // true
console.log(canMouseEat('right', room))   // false
console.log(canMouseEat('left',  room))   // false

const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
]

console.log(canMouseEat('up',    room2))   // false
console.log(canMouseEat('down',  room2))   // false
console.log(canMouseEat('right', room2))   // true
console.log(canMouseEat('left',  room2))   // false