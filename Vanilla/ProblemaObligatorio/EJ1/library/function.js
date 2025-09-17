"use strict"

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

export function showMonth(month) {
    if (isNaN(month)) return "Eso no es un numero animal de corral"
    if (month < 1 || month > 12)
        return "No es un numero de mes valido bobalicón"
    return months[month - 1] + " es el mes " + month
}
