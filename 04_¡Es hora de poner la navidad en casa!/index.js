function createXmasTree(height) {
    const pine = []
    for(let i = 1, stars = 1; i <= height; i++, stars += 2) {
      pine.push(`${'_'.repeat(height - i)}${'*'.repeat(stars)}${'_'.repeat(height - i)}`)
    }
    const base = `${'_'.repeat(height - 1)}#${'_'.repeat(height - 1)}`
    pine.push(base)
    pine.push(base)
    return pine.join('\n')
}

console.log(createXmasTree(10))

//createXmasTree(5) ↴
/*
    ____*____
    ___***___
    __*****__
    _*******_
    *********
    ____#____
    ____#____

*/

//createXmasTree(3) ↴
/*
    __*__
    _***_
    *****
    __#__
    __#__
*/