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
        (e) => {
            e.dataTransfer.setData("id", e.target.id)
            e.dataTransfer.setData("name", e.target.localName)
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
        (e) => {
            e.preventDefault()
            //To avoid the user to drop more than 1 item into the div
            if (
                e.target.classList[0] === "releasable" &&
                e.target.children === 1
            )
                return

            if (e.target.classList.contains("releasable")) {
                e.target.appendChild(
                    document.getElementById(e.dataTransfer.getData("id"))
                )
            }
            //If the container up is empty it will check the puzzle
            if (document.getElementById("draggables").children.length === 0) {
                validateTable()
            } else {
                //Otherwise it remove the inside of the win message div
                document.getElementById("win").innerText = ""
            }
        },
        false
    )

    document.getElementById("btt1").addEventListener(
        "click",
        () => {
            const releasable = document.getElementsByClassName("releasable")
            //Remove all the innerHtml of the puzzle
            for (let i = 0; i < releasable.length; i++) {
                releasable[i].innerHTML = ""
            }
            //It regenerate the shuffle array in the up container
            shuffledArray = shuffle(images)
            generatePieces(shuffledArray)
            //I remove the win message
            document.getElementById("win").innerText = ""
        },
        false
    )

    
} //THE END
