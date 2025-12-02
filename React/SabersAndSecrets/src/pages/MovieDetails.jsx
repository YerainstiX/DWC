import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getData } from "../lib/getData.js"
const MovieDetails = () => {
    const url = "https://swapi.dev/api/films/"
    const { id } = useParams()

    const [movie, setMovie] = useState()

    const getMovie = async () => {
        const movies = await getData(url)
        setMovie(movies.find((movie) => movie.episode_id == id))
    }

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div className="movieDetails-container">
            <div className="movieDetails-info">
                {movie ? (
                    <>
                        <h1>{movie.title}</h1>
                        <h2>
                            Director: {movie.director} | Producer{" "}
                            {movie.producer}
                        </h2>
                        <h3>
                            {
                                new Date(movie.release_date)
                                    .toLocaleString("es-ES")
                                    .split(",")[0]
                            }
                        </h3>
                        <p>{movie.opening_crawl}</p>
                    </>
                ) : (
                    <h1>Loading Movie Data...</h1>
                )}
            </div>
            <div></div>
        </div>
    )
}

export default MovieDetails
