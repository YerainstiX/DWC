"use strict"
//Function to show the result of the media
function showArithmeticMedia(media) {
    if (isNaN(media)) {
        return media
    } else
        return (
            "La media aritmética de los números introducidos es " +
            media.toFixed(2)
        )
}
//Function using the pseudoarray arguments to calc the arithmetic media with the numbers inside of arguments
export function arithmeticMedia() {
    var arithmeticMedia = 0
    for (let i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i]) || arguments[i] < 0) {
            return arguments[i] + " no es un numero o es positivo"
        } else if (arguments[i] % 1 != 0) {
            return arguments[i] + " no es un numero entero"
        } else {
            arithmeticMedia += arguments[i]
        }
    }
    return showArithmeticMedia(arithmeticMedia / arguments.length)
}
