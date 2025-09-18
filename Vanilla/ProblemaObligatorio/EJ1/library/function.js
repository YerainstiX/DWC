"use strict"
//Array con todos los posibles meses validos
const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
]
//

export function showMonth(month) {
    if (isNaN(month)) return "Debes introducir un numero"
    if (month < 1 || month > 12) return month + " no es un numero de mes valido"
    return months[month - 1] + " es el mes " + month
}
