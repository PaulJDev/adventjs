function getMinJump(obstacles){
    let jumps = 1;
    const max = Math.max(...obstacles)
    for (let i = 0; i <= max; i += jumps) {
      if(obstacles.includes(i)) {
        i = 0;
        jumps++
      }
    }
    return jumps
}

let obstacles = [5, 3, 6, 7, 9]
console.log(getMinJump(obstacles)) // -> 4

obstacles = [2, 4, 6, 8, 10]
console.log(getMinJump(obstacles)) // -> 7