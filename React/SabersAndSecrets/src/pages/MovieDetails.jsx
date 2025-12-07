import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDataResults, getData } from "../lib/getData.js"
import { Link } from "react-router-dom"
import "./MovieDetails.css"

const MovieDetails = () => {
    const url = "https://swapi.dev/api/films/"
    const { id } = useParams()

    const [movie, setMovie] = useState({})
    const [characters, setCharacters] = useState()

    const getMovie = async () => {
        const movies = await getDataResults(url)
        setMovie(movies.find((movie) => movie.episode_id == id))
    }

    const getCharacters = async () => {
        const promiseCharacters = movie.characters
            .slice(0, 10)
            .map((character, i) => {
                return getData(character)
            })

        const result = await Promise.allSettled(promiseCharacters)

        const characterWithId = result
            .filter((data) => data.status === "fulfilled")
            .map((data, i) => {
                const characterData = data.value
                const id = getCharacterId(movie.characters[i])
                return { ...characterData, id }
            })

        setCharacters(characterWithId)
    }

    const getCharacterId = (url) => {
        return url.split("/")[5]
    }

    useEffect(() => {
        getMovie()
    }, [])

    useEffect(() => {
        movie.characters && getCharacters()
    }, [movie])

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
            <div className="movieDetails-Characters">
                <h1>Characters:</h1>
                {characters ? (
                    characters.map((character) => (
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
