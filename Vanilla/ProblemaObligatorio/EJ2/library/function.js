"use strict"

function isEven(number) {
    if (number % 2 == 0) return "es par"
    else return "es impar"
}

function isPositive(number) {
    if (number >= 0) return "es positivo"
    else return "es negativo"
}

function isPrime(number) {
    for (let i = 1; i <= number; i++) {
        if (number % i != 0) return "no es primo"
    }
    return "es primo"
}

function numberAnalysis(number) {
    return (
        "El numero" +
        number +
        isEven(number) +
        ", " +
        isPositive(number) +
        "y " +
        isPrime(number)
    )
}
