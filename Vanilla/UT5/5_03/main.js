"use strict"
import { createTable } from "./lib/function.js"

window.onload = () => {
    createTable(60)

    const container = document.querySelector(".colors")
    const canva = document.querySelector(".canva")
    const td = document.querySelectorAll("td")
    const remove = document.querySelector(".remove_color")
    let clase = "white"
    let painting = false

    //SELECT COLOR
    container.addEventListener(
        "click",
        (event) => {
            if (event.target.classList.value !== "colors") {
                clase = event.target.classList.value
                document.querySelector(".color_select").innerText = clase
            }
        },
        false
    )

    //CLEAR CANVA
    remove.addEventListener(
        "click",
        (event) => {
            Array.from(td).forEach((e) => (e.className = ""))
        },
        false
    )

    //PAINT
    canva.addEventListener(
        "mousedown",
        (event) => {
            if (event.target.tagName === "TD") {
                event.target.className = clase
                painting = true
            }
        },
        false
    )

    canva.addEventListener(
        "mouseup",
        () => {
            painting = false
        },
        false
    )

    canva.addEventListener(
        "mouseover",
        (event) => {
            if (event.target.tagName === "TD" && painting) {
                event.target.className = clase
            }
        },
        false
    )
} //The END
