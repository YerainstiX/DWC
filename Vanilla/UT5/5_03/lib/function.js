"use strict"

//Function to create a table due to a size 
export const createTable = (size) => {
    const container = document.querySelector(".canva")
    const table = document.createElement("table")
    let increment = 1
    for (let i = 0; i < size; i++) {
        const row = document.createElement("tr")

        for (let j = 0; j < size; j++) {
            const column = document.createElement("td")
            row.appendChild(column)
        }
        table.appendChild(row)
    }
    container.appendChild(table)
}

