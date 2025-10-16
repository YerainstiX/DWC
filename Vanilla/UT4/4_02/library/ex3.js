"use strict"

import { getRandomInt } from "../functions/mathFunctions.js";

export const changeP = () => {
    const paragraphs = document.querySelectorAll("p")
    const rand = getRandomInt(paragraphs.length)
    
    console.log(rand);
    const r = getRandomInt(256)
    const g = getRandomInt(256)
    const b = getRandomInt(256)
    paragraphs[rand].style.backgroundColor = `rgb(${r},${g},${b})`
}