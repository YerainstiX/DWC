"use strict"

import { loadWeb } from "./lib/anime.js"
import { resetLocalData } from "./lib/localData.js"

window.onload = () => {
    loadWeb()
    document.getElementById("reset").addEventListener(
        "onclick",
        (e) => {
            if (e.target === "BUTTON") {
                resetLocalData()
            }
        },
        false
    )
} //THE END
