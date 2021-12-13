function shouldBuyFidelity(times) {
    let fidelity = 250;
    for (let i = 1; i <= times; i++) {
      fidelity += 12 * 0.75 ** i;
    }
    return fidelity <= 12 * times;
}

console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad