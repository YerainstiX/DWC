import React from "react"
import movies from "../assets/movies.json"
import ListaInterpretes from "./ListaInterpretes.jsx"

const MovieDetails = () => {
    const mov = movies.movies
    
    return (
        <>
            <div className="pelicula_container">
                <div className="pelicula_texto">
                    <h1 className="plicula_titulo">{mov.tittle}</h1>
                    <h2 className="pelicula_direccion">{mov.director}</h2>
                    <p>{mov.year}</p>
                </div>
                <div className="pelicula_image_resumen">
                    <img
                        src={mov.image}
                        alt="imagen"
                        className="pelicula_image"
                    ></img>
                    <p className="pelicula_resumen">{mov.summary}</p>
                </div>
                <ListaInterpretes cast={mov.cast} />
            </div>
        </>
    )
}

export default MovieDetails
