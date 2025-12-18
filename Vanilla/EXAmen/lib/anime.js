"use strict"

import { showAnime } from "./dom.js"
import { saveAPILocalData } from "./localData.js"
import { localData } from "./localData.js"

const divAnime = document.getElementById("animes")

export const loadWeb = () => {
    saveAPILocalData()
    divAnime.innerHTML = showAnime(localData)
}
