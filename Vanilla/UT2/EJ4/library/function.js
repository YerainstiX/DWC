"use strict"
//Function to show the result of the power
function showPower(base, exponent, result) {
    return (
        "El resultado de la potencia " +
        base +
        " elevado a " +
        exponent +
        " es: " +
        result
    )
}

//If the number is negative we turn it into positive to make it simple
function isPositive(number) {
    if (number >= 0) return number
    else return -number
}
//Function to calc the power based on the base and the exponent
export function power(base, exponent) {
    if (isNaN(base) || isNaN(exponent)) return "Debes introducir un numero"
    if (base % 1 != 0) return base + " no es un numero entero"
    if (exponent % 1 != 0) return exponent + " no es un numero entero"

    exponent = isPositive(exponent) //We make sure the exponent is positive

    if (exponent == 1) {
        result = base
    } else if (exponent == 0) {
        result = 1
    } else {
        var result = 1
        var counter = 1
        while (counter <= exponent) {
            result *= base
            counter++
        }
    }

    return showPower(base, exponent, result)
}
