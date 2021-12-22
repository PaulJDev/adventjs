function learn(time, courses) {
  let res;
  courses.forEach((course, i) => {
    const courseWithoutCurrent = courses.filter((e, idx) => idx !== i)
    courseWithoutCurrent.forEach((c, j) => {
      const [storageCourse1, storageCourse2] = res || [0, 0]
      const totalHours = course + c
      const storageTotalHours = storageCourse1 + storageCourse2      
      if (totalHours <= time && totalHours > storageTotalHours) {
        res = [course, c, i, j+1]
      }
    })
  })  
  return res ? res.slice(2) : null
}

console.log(learn(10, [2, 3, 8, 1, 4])) // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.

console.log(learn(15, [2, 10, 4, 1])) // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.

console.log(learn(25, [10, 15, 20, 5])) // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos

console.log(learn(8, [8, 2, 1])) // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.

console.log(learn(8, [8, 2, 1, 4, 3])) // [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.

console.log(learn(4, [10, 14, 20])) // null -> no nos da tiempo a hacer dos cursos
