import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDataResults, getData } from "../lib/getData.js"
import { Link } from "react-router-dom"
import "./MovieDetails.css"
import { getPosterByEpisode } from "../lib/utils.js"
import { ContextMovies } from "../context/ProviderMovies.jsx"
import { ContextCharacters } from "../context/ProviderCharacters.jsx"

const MovieDetails = () => {
    const { id } = useParams()

    const { movies } = useContext(ContextMovies)
    const { characters } = useContext(ContextCharacters)

    const [movieCharacters, setMovieCharacters] = useState()

    //console.log(character)

    const getMovie = () => movies.find((movie) => movie.episode_id == id)

    const movie = getMovie()

    //A method to get the characters and give them an id
    const getMovieCharacters = async () => {
        const movieCharactersID = movie.characters
            .slice(0, 10)
            .map((url) => getCharacterId(url))

        const filteredCharacters = characters.filter((character) =>
            movieCharactersID.includes(character.id)
        )

        setMovieCharacters(filteredCharacters)
    }

    //A method to get the id from the url
    const getCharacterId = (url) => {
        return url.split("/")[5]
    }

    useEffect(() => {
        if (movie && characters) {
            getMovieCharacters()
        }
    }, [movie, characters])

    return (
        <div className="movieDetails-container">
            <div className="movieDetails-info">
                {movie ? (
                    <>
                        <div className="movieDetails-img">
                            <img
                                src={getPosterByEpisode(movie.episode_id)}
                                alt="img"
                            />
                        </div>
                        <div className="movieDetails-movieInfo">
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
                        </div>
                    </>
                ) : (
                    <h1>Loading Movie Data...</h1>
                )}
            </div>
            <div className="movieDetails-Characters">
                <h1>Characters:</h1>
                {movieCharacters ? (
                    movieCharacters.map((character) => (
                        <Link
                            key={character.id}
                            className="movieDetails-CharactersList"
                            to={`/character/${character.id}`}
                        >
                            <div className="movieDetails-container">
                                {character.name}
                            </div>
                        </Link>
                    ))
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        </div>
    )
}

export default MovieDetails
