import React, { useState } from "react"
import movies from "../assets/movies.json"
import Movie from "../components/Movie"

const Movies = () => {
    const mov = movies.movies

    return (
        <>
            {mov.map((movie, index) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    director={movie.director}
                    year={movie.year}
                    image={movie.image}
                    summary={movie.summary}
                    cast={movie.cast}
                ></Movie>
            ))}
        </>
    )
}

export default Movies
