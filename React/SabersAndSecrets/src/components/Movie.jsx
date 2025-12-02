import React from "react"
import "./Movie.css"
import { Link } from "react-router-dom"

const Movie = ({ id, name }) => {
    return (
        <Link className="movie-link" to={`/movie/${id}`}>
            <div className="movie-container">
                Episode {id} | {name}
            </div>
        </Link>
    )
}

export default Movie
