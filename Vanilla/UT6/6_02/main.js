"use strict"

import { getData } from "./lib/getData.js"

window.onload = () => {
    const url = "https://swapi.dev/api/films/"
    const data = async () => {
        const movies = await getData(url)
        console.log(movies)
        
    }

    data()
} //THE END
