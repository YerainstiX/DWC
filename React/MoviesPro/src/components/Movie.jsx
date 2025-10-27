import React from "react"
import { Link } from "react-router-dom"
import ListaInterpretes from "./ListaInterpretes.jsx"
import MovieDetails from "./MovieDetail.jsx"

const Movie = ({ id, title, director, year, image, summary, cast }) => {
    return (
        <>
            <div className="pelicula_container">
                <div className="pelicula_texto">
                    <h1 className="plicula_title">{title}</h1>
                    <h2 className="pelicula_year">{year}</h2>
                </div>
                <div className="pelicula_image_resumen">
                    <img
                        src={image}
                        alt="imagen"
                        className="pelicula_image"
                    ></img>
                </div>
                <Link to={`/movies/${id}`}>
                    <button>DETAILS</button>
                </Link>
            </div>
        </>
    )
}

export default Movie
