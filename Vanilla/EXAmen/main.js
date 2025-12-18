"use strict"

import { loadWeb, resetWeb } from "./lib/anime.js"
import { showAnime } from "./lib/dom.js"
import {
    deleteAnime,
    filterData,
    getLocalData,
    saveLocalAnime,
} from "./lib/localData.js"

import { validateAnime } from "./lib/validations.js"

const divAnime = document.getElementById("animes")

window.onload = () => {
    loadWeb()
    //RESET LOCALDATA
    document.getElementById("reset").addEventListener(
        "click",
        (e) => {
            resetWeb()
        },
        false
    )
    //SAVE
    document.getElementById("save").addEventListener("click", (e) => {
        if (validateAnime()) {
            saveLocalAnime()
            loadWeb()
        }
    })
    //DELETE
    document.getElementById("animes").addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            deleteAnime(e)
            loadWeb()
        }
    })

    document.getElementById("search").addEventListener("input", (e) => {
        let data = getLocalData()
        data = data.filter((anime) =>
            anime.title.toLowerCase().includes(e.target.value)
        )
        divAnime.innerHTML = showAnime(data)
    })
} //THE END
