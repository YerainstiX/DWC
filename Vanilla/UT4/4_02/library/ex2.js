"use strict"

export const createTable = (size) => {
    const body = document.body
    const table = document.createElement("table")
    let increment = 0
    for (let i = 0; i < size; i++) {
        const row = document.createElement("tr")

        for (let i = 0; i < size; i++) {
            const collum = document.createElement("td")
            row.appendChild(collum)
            row.innerHTML += i + increment
        }
        table.appendChild(row)
        increment += 10
    }
    body.appendChild(table)
}
