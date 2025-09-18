"use strict"

function isMultipleOf3(number) {
    if (number % 3 == 0) return true
}

export function showMultiplesOf3(number) {
    var multiplesOf3 = "Múltiplos de tres hasta el numero introducido: "
    if (isNaN(number)) {
        return "Eso no es un numero animal de corral"
    } else {
        for (let index = 1; index <= number; index++) {
            if (isMultipleOf3(index)) {
                multiplesOf3 += index
                if (index + 3 <= number) multiplesOf3 += ", "
            }
        }
        return multiplesOf3
    }
}
