import React from "react"
import "./Movie.css"
import { Link } from "react-router-dom"
import { getPosterByEpisode } from "../lib/utils.js"
//The individual component to show a movie

const Movie = ({ id, name }) => {
    return (
        <Link className="movie-link" to={`/movie/${id}`}>
            <div className="movie-container">
                <img src={getPosterByEpisode(id)} alt="img" />
                Episode {id} | {name}
            </div>
        </Link>
    )
}

export default Movie
