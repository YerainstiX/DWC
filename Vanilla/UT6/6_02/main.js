"use strict"

import { getData } from "./lib/getData.js"
import { showMovies } from "./lib/modifyDOM.js"

window.onload = () => {
    const url = "https://swapi.dev/api/films/"

    const data = async () => {
        const movies = await getData(url)
        console.log(movies)
        //SHOW MOVIES
        document.getElementById("aside-movies").innerHTML = showMovies(movies)
        //SHOW INFO
        document.getElementById("aside-movies").addEventListener("click", () => {
        
    }, false)
    }

    data()

    
    
} //THE END
