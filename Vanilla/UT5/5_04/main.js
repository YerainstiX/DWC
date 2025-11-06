"use strict"

import { generatePieces, shuffle, validateTable } from "./lib/ex1.js"

window.onload = () => {
    const images = [
        "./assets/1.png",
        "./assets/2.png",
        "./assets/3.png",
        "./assets/4.png",
        "./assets/5.png",
        "./assets/6.png",
        "./assets/7.png",
        "./assets/8.png",
        "./assets/9.png",
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

            if (document.getElementById("draggables").hasChildNodes()) {
                validateTable()
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

    document.getElem
} //THE END
