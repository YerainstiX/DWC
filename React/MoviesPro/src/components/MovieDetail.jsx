import React from "react"
import { useParams } from "react-router-dom"
import movies from "../assets/movies.json"
import ListaInterpretes from "./ListaInterpretes.jsx"
import "./MovieDetail.css"

//The component to show the details of the movie by the ID
const MovieDetails = () => {
    const { id } = useParams()
    const movieId = parseInt(id)
    const mov = movies.movies.find((m) => m.id.toString() === id)

    return (
        <>
            <div className="pelicula_container">
                <div className="pelicula_image_resumen">
                    <img
                        src={mov.image}
                        alt={mov.title}
                        className="pelicula_image"
                    ></img>
                </div>
                <div className="pelicula_texto">
                    <h1 className="plicula_titulo">{mov.title}</h1>
                    <h2 className="pelicula_direccion">{mov.director}</h2>
                    <p className="pelicula_year">{mov.year}</p>
                    <p className="pelicula_resumen">{mov.summary}</p>
                </div>
                <h2>INTERPRETES</h2>
            </div>
            <ListaInterpretes id={movieId} />
        </>
    )
}

export default MovieDetails
