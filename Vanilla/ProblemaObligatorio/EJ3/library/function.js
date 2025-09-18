"use strict"
//Function to know if the number is a multiple of 3
function isMultipleOf3(number) {
    if (number % 3 == 0) return true
}
//Function to show the multiples of 3 until the number using the function above
export function showMultiplesOf3(number) {
    var multiplesOf3 = "Múltiplos de tres hasta el numero introducido: "
    if (isNaN(number)) {
        return "Debes introducir un numero"
    } else if (number < 0) {
        return "El numero debe ser positivo"
    } else if (number % 1 != 0) {
        return number + " no es un numero entero"
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
