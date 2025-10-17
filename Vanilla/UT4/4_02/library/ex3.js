"use strict"

import { getRandomInt } from "../functions/mathFunctions.js"

export const changeP = () => {
    const paragraphs = document.querySelectorAll("p") //The document provided by you have 6 <p> so I use it.
    const rand = getRandomInt(paragraphs.length)
    //I prepare the values of the rgb with a rand number to style the background
    const r = getRandomInt(256)
    const g = getRandomInt(256)
    const b = getRandomInt(256)
    paragraphs[rand].style.backgroundColor = `rgb(${r},${g},${b})`
    paragraphs[rand].style.border = `4px solid rgb(${b},${g},${r})`
}
