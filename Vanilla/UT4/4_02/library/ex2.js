"use strict"
import "../functions/mathFunctions.js"
import { isPrime } from "../functions/mathFunctions.js"

export const createTable = (size) => {
    const body = document.body
    const table = document.createElement("table")
    let increment = 1
    for (let i = 0; i < size; i++) {
        const row = document.createElement("tr")

        for (let j = 0; j < size; j++) {
            const column = document.createElement("td")
            row.appendChild(column)
            column.innerHTML += j + increment
        }
        table.appendChild(row)
        increment += 10
    }
    body.appendChild(table)
}

export const markPrimeNumbers = () => {
    const cells = document.querySelectorAll("td")
    cells.forEach((cell) => {
        const n = cell.innerHTML //I get the value of the cell, and below i check if it's prime
        if (isPrime(n)) {
            cell.classList.add("prime")
            cell.innerHTML = `<span class="prime">${n}</span>`
        }
    })
}
