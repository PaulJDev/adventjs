function contains(store, product) {
    // return new RegExp(`\\b${product}\\b`).test(JSON.stringify(store)) JEJE
    if (store && typeof store == 'object') {
        return Object.values(store).some(e => contains(e, product))
    }

    return store === product
}

const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
}
            
console.log(contains(almacen, 'camiseta')) // true

const otroAlmacen = {
    'baul': {
        'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
        }
    }
}
    
console.log(contains(otroAlmacen, 'gameboy')) // false