import React from "react"
import "./Pelicula.css"

const Pelicula = (props) => {
    return (
        <>
            <div className="pelicula_container">
                <div className="pelicula_texto">
                    <h1 className="plicula_titulo">{props.titulo}</h1>
                    <h2 className="pelicula_direccion">{props.direccion}</h2>
                </div>
                <div className="pelicula_image_resumen">
                    <img
                        src={props.cartelera}
                        alt="imagen"
                        className="pelicula_image"
                    ></img>
                    <p className="pelicula_resumen">{props.children}</p>
                </div>
            </div>
        </>
    )
}

export default Pelicula
