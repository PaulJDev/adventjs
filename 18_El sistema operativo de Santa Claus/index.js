function fixFiles(files) {
    const count = files.reduce((t, c) => {
      t[c] = (t[c] || 0) + 1
      return t
    }, {})
    return files.reverse().map(e => count[e] > 1 ? `${e}(${(count[e]--) - 1})` : e).reverse()
  }
  
  const files = ['photo', 'postcard', 'photo', 'photo', 'video']
  console.log(fixFiles(files)) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
  
  const files2 = ['file', 'file', 'file', 'game', 'game']
  console.log(fixFiles(files2)) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']
  
  // ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
  const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
  console.log(fixFiles(files3)) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']