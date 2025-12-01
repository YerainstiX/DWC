"use strict"

import { getData } from "./lib/getData.js"
import { showInfo, showMovies } from "./lib/dom.js"

window.onload = () => {
    const url = "https://swapi.dev/api/films/" //This url was the only one working for me
    //const url1 = "http://swapi.py4e.com/api/planets";
    //const url2 = "https://swapi.info/api/planets";
    
    const aside = document.getElementById("movie-list")
    const info = document.getElementById("movie-data")

    const data = async () => {
        const movies = await getData(url)
        //SHOW MOVIES
        aside.innerHTML = showMovies(movies)
        //SHOW INFO
        aside.addEventListener(
            "click",
            (e) => {
                e.target.classList.contains("movie") &&
                    (info.innerHTML = showInfo(movies, e.target.id))
            },
            false
        )
    }

    data()
} //THE END
