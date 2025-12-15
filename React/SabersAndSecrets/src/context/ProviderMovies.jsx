import React, { createContext, useState, useEffect } from "react"
import { getDataResults, getData } from "../lib/getData"
import { useParams } from "react-router-dom"
const ContextMovies = createContext()

const ProviderMovies = ({ children }) => {
    const url = "https://swapi.dev/api/films/"
    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const movies = await getDataResults(url)
        setMovies(movies)
    }

    useEffect(() => {
        getMovies()
    }, [])

    const box = { movies }

    return <ContextMovies value={box}>{children}</ContextMovies>
}

export default ProviderMovies

export { ContextMovies }
