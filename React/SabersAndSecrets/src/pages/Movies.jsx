import React, { useEffect } from "react"
import "./Movies.css"
import { useState } from "react"
import { getDataResults } from "../lib/getData"
import Movie from "../components/Movie"

const Movies = () => {
    const url = "https://swapi.dev/api/films/"
    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const movies = await getDataResults(url)
        setMovies(movies)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div className="movies-container">
            <h1>Star Wars Movies</h1>
            <div className="movies-list">
                {movies ? (
                    movies.map((movie) => (
                        <Movie
                            key={movie.episode_id}
                            id={movie.episode_id}
                            name={movie.title}
                        />
                    ))
                ) : (
                    <p>Loading Movies...</p>
                )}
            </div>
        </div>
    )
}

export default Movies
