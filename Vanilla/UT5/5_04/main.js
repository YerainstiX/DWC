"use strict"

import { generatePieces, shuffle } from "./lib/ex1.js"

window.onload = () => {
    const images = [
        "./assets/img1.png",
        "./assets/img2.png",
        "./assets/img3.png",
        "./assets/img4.png",
        "./assets/img5.png",
        "./assets/img6.png",
        "./assets/img7.png",
        "./assets/img8.png",
        "./assets/img9.png",
    ]

    let shuffledArray = shuffle(images)
    generatePieces(shuffledArray)

    document.getElementById("draggable_zone").addEventListener(
        "dragstart",
        (evento) => {
            evento.dataTransfer.setData("id", evento.target.id)
            evento.dataTransfer.setData("name", evento.target.localName)
        },
        false
    )

    document.getElementById("draggable_zone").addEventListener(
        "dragover",
        (evento) => {
            evento.preventDefault()
        },
        false
    )

    document.getElementById("draggable_zone").addEventListener(
        "drop",
        (evento) => {
            evento.preventDefault()
            if (evento.target.classList.contains("releasable")) {
                evento.target.appendChild(
                    document.getElementById(evento.dataTransfer.getData("id"))
                )
            }
        },
        false
    )

    document.getElementById("btt1").addEventListener(
        "click",
        () => {
            const releasable = document.getElementsByClassName("releasable")
            for (let i = 0; i < releasable.length; i++) {
                releasable[i].innerHTML = ""
            }
            shuffledArray = shuffle(images)
            generatePieces(shuffledArray)
        },
        false
    )
} //THE END
