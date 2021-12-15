function maxProfit(prices) {
    if (prices.length <= 1) return -1
    
    const min = Math.min(...prices), max = Math.max(...prices)
    const minIdx = prices.indexOf(min), maxIdx = prices.indexOf(max)
    
    if (minIdx < maxIdx) return max - min
    
    if (min === prices[prices.length -1]) prices.pop()
    if (max === prices[0]) prices.shift()
    
    return maxProfit(prices) 
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
console.log(maxProfit(pricesBtc)) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
console.log(maxProfit(pricesEth)) // -> 60 (compra a 10, vende a 70)
    

const pricesDoge = [18, 15, 12, 11, 9, 7]
console.log(maxProfit(pricesDoge)) // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
console.log(maxProfit(pricesAda)) // -> -1 (no hay ganancia posible)