function canCarry(capacity, trip) {
    for (let i = 0; i < trip.length; i++) {
        if (trip[i][0] > capacity || trip[i][0] + ((trip[i+1] || [])[0] || 0) > capacity && trip[i][2] > ((trip[i+1] || [])[1] || 0)) return false
    }
    return true
}

function canCarry2(capacity, trip) {
    for (let i = 0; i < trip.length; i++) {
      const [ carry, collection, delivery ] = trip[i]
      const [ nextCarry, nextCollection, nextDelivery ] = trip[i+1] || [0,0,0]
      if (carry + nextCarry > capacity && delivery > nextCollection) return false
    }
    return true
}

function canCarry3(capacity, trip) {
    return trip.reduce((t, c, i) => {
      const [ carry, collection, delivery ] = c
      const [ nextCarry, nextCollection, nextDelivery ] = trip[i+1] || [0,0,0]
      if (carry + nextCarry > capacity && delivery > nextCollection) t = false
      return t
    }, true)
}
  
console.log(canCarry(4, [[2, 5, 8], [3, 6, 10]])) // false
// En el punto 5 recoge 2 regalos...
// En el punto 6 recoge 3 regalos...
// Del punto 6 al 8 tendría 5 regalos en total
// Y su capacidad es 4... así que ¡no podría!

console.log(canCarry(3, [[1, 1, 5], [2, 2, 10]])) // true
// En el punto 1 recoge 1 regalo...
// En el punto 2 recoge 2 regalos...
// En el punto 5 entrega 1 regalo...
// En el punto 10 entrega 2 regalos...
// ¡Sí puede! Nunca superó la carga máxima de 3 regalos

console.log(canCarry(3, [[2, 1, 5],[3, 5, 7]])) // true -> nunca supera el máximo de capacidad
console.log(canCarry(4, [[2, 3, 8],[2, 5, 7]])) // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo

console.log(canCarry(1, [[2, 3, 8]])) // false -> no podría ni con el primer viaje
console.log(canCarry(2, [[1, 2, 4], [2, 3, 8]])) // false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos
