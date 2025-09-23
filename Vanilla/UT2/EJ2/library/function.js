"use strict"
//Required checks to the number
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

//Function to show the checked number
export function numberAnalysis(number) {
    if (isNaN(number)) return "Debes introducir un numero"
    if (number % 1 != 0) return number + " no es un numero entero"
    return (
        "El numero " +
        number +
        " " +
        isEven(number) +
        ", " +
        isPositive(number) +
        " y " +
        isPrime(number)
    )
}
