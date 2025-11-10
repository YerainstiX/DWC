"use strict"

export const generatePieces = (array) => {
    for (let i = 0; i < array.length; i++) {
        let url = array[i]

        let img = document.createElement("img")
        img.src = url
        img.alt = `Trozo`
        /* I need to assign the ID to the image to check if the puzzle is correct 
        so I use split + the url to get the correct ID */
        let id = url.split("/")
        id = id[2].split(".")
        img.id = id[0]
        img.setAttribute("draggable", true) //It need to be draggable to drag it :)

        document.getElementById("draggables").appendChild(img)
    }
}

//Fisher–Yates algorism to shuffle the array I'm not going to lie to you I use GPT for this
export const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))

        let aux = array[i]

        array[i] = array[j]
        array[j] = aux
    }
    return array
}

export const validateTable = () => {
    const container = document.getElementById("releasables")
    let allCorrect = true 

    Array.from(container.children).forEach((element, i) => {
        const img = element.children[0]

        if (img.tagName !== "IMG") {
            allCorrect = false
        }

        if (parseInt(img.id) !== i + 1) {
            allCorrect = false
        }
    })
    //Only if allCorrect is true it will show the win message
    if (allCorrect) {
        document.getElementById("win").innerText =
            "I see you have the optifine installed :)"
    }
}
