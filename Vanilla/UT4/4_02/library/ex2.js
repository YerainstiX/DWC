"use strict"
import "../functions/mathFunctions.js"
import { isPrime } from "../functions/mathFunctions.js"

export const createTable = (size) => {
    const body = document.body
    const table = document.createElement("table")
    let increment = 0
    for (let i = 0; i < size; i++) {
        const row = document.createElement("tr")

        for (let j = 0; j < size; j++) {
            const collum = document.createElement("td")
            row.appendChild(collum)
            collum.innerHTML += j + increment
        }
        table.appendChild(row)
        increment += 10
    }
    body.appendChild(table)
}

export const markPrimeNumbers = () => {
    const cells = document.querySelectorAll("td")
    cells.forEach((cell) => {
        const n = cell.innerHTML
        if (isPrime(n)) {
            cell.innerHTML = `<span class="prime">${n}</span>`
        }
    })
}
