"use strict"

import { showAnime } from "./dom.js"
import { getLocalData, resetLocalData, saveAPILocalData } from "./localData.js"

const divAnime = document.getElementById("animes")

export const loadWeb = () => {
    saveAPILocalData()
    console.log(getLocalData())
    divAnime.innerHTML = showAnime(getLocalData())
}

export const resetWeb = async () => {
    await resetLocalData()
    divAnime.innerHTML = showAnime(getLocalData())
}
