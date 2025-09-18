"use strict"
//Array with all the possible months to show
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
//Function to show the month and the number of the month
export function showMonth(month) {
    if (isNaN(month)) return "Debes introducir un numero"
    if (month % 1 != 0) return month + " no es un numero entero"
    if (month < 1 || month > 12) return month + " no es un numero de mes valido"
    return months[month - 1] + " es el mes " + month
}
