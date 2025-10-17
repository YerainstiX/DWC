"use strict"
const images = [
    "./assets/steam.png",
    "./assets/bananaman.jpg",
    "./assets/alfredo.jpg",
    "./assets/sescucha.jpg",
]
//Style is for the weak people, I like the images to pop like a magic trick.
export const imgCarrousel = () => {
    const container = document.createElement("div")
    const img = document.createElement("img")
    img.setAttribute("id", "carrousel") //Id to make it simple to aced the <img>

    img.style.width = "300px"
    img.style.height = "300px"

    container.appendChild(img)
    document.body.appendChild(container)
    //Logic of the carrousel it's like a while bucle with a counter variable.
    let i = 0
    setInterval(() => {
        if (i >= images.length) {
            i = 0
        }
        const element = document.getElementById("carrousel")
        if (element) element.src = images[i]
        i = i + 1
    }, 2000)
}
