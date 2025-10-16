"use strict"

export const isPrime = (n) => {
    if (n < 2) {
        return false
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false
    }
    return true
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
