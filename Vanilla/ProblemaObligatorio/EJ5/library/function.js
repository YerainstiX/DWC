"use strict"

function showArithmeticMedia(media) {
    if (isNaN(media)) {
        return media
    } else
        return (
            "La media aritmética de los números introducidos es " +
            media.toFixed(2)
        )
}

export function arithmeticMedia() {
    var arithmeticMedia = 0
    for (let i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i]) || arguments[i] < 0) {
            return arguments[i] + " no es un numero o es negativo ceporro"
        } else {
            arithmeticMedia += arguments[i]
        }
    }
    return showArithmeticMedia(arithmeticMedia / arguments.length)
}
