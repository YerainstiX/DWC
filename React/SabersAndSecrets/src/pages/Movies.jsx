import React, { useContext, useEffect } from "react"
import "./Movies.css"

import Movie from "../components/Movie"

import { ContextMovies } from "../context/ProviderMovies"

const Movies = () => {
    const { movies } = useContext(ContextMovies)

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
