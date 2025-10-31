"use strict"
import { createTable } from "./lib/function.js"

window.onload = () => {
    createTable(60)

    const container = document.querySelector(".colors")
    const canva = document.querySelector(".canva")

    container.addEventListener(
        "click",
        (event) => {
            const clase = container.children.event.target.classList
        },
        false
    )

    canva.addEventListener(
        "click",
        (event) => {
            event.target.classList = []
            event.target.classList.add(clase)
        },
        false
    )
} //The END
