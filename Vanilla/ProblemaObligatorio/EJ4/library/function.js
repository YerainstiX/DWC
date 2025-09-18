"use strict"

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

//Esto es principalmente para pasar el exponente a positivo si nos lo dan en negativo
function isPositive(number) {
    if (number >= 0) return number
    else return -number
}

export function power(base, exponent) {
    if (isNaN(base) && isNaN(exponent))
        return "Eso no es un numero animal de corral"

    exponent = isPositive(exponent) //Nos aseguramos que la potencia sea positiva

    if (exponent == 1) {
        result = base
    } else if (exponent == 0) {
        result = 1
    } else {
        var result = 1
        var counter = 1
        while (counter < exponent) {
            result *= base
            counter++
        }
    }

    return showPower(base, exponent, result)
}
