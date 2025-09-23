"use strict"
//Function to show the results of the operation
function showResult(result, number1, number2, operator) {
    return (
        "El resultado de la operación: " +
        number1 +
        " " +
        operator +
        " " +
        number2 +
        " = " +
        result
    )
}
//Function to do the operation checking if the operator is valid with a switch
export function calculator(number1, number2, operator) {
    if (isNaN(number1) || isNaN(number2))
        return "La operación no es valida debes introducir números"
    if (number1 % 1 != 0) return number1 + " no es un numero entero"
    if (number2 % 1 != 0) return number2 + " no es un numero entero"
    var result = 0
    switch (operator) {
        case "+":
            result = number1 + number2
            break
        case "-":
            result = number1 - number2
            break
        case "*":
            result = number1 * number2
            break
        case "/":
            result = number1 / number2
            break
        case "%":
            result = number1 % number2
            break
        default:
            return operator + " no es un operador valido"
    }
    return showResult(result, number1, number2, operator)
}
