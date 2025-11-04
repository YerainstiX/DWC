"use strict"

export const generatePieces = (array) => {
    for (let i = 0; i < array.length; i++) {
        let url = array[i]

        let img = document.createElement("img")
        img.src = url
        img.alt = `Trozo`
        img.id = i
        img.setAttribute("draggable", true)

        document.getElementById("draggables").appendChild(img)
    }
}

//Fisher–Yates algorism to shuffle the array
export const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))

        let aux = array[i]

        array[i] = array[j]
        array[j] = aux
    }
    return array
}
