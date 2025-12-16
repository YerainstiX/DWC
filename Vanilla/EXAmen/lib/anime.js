"use strict"

import { showAnime } from "./dom.js"
import { localContains } from "./localData.js"

const divAnime = document.getElementById("animes")
const data = JSON.parse(localStorage.getItem("anime"))

export const loadWeb = () => {
    localContains()
    divAnime.innerHTML = showAnime(data)
}


