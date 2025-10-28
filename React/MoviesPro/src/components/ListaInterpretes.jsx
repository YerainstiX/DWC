import React, { useRef } from "react"
import Interprete from "./Interprete.jsx"
import movies from "../assets/movies.json"
import "./ListaInterpretes.css"

//The component to show all the actors
const ListaInterpretes = ({ id }) => {
    const mov = movies.movies.find((m) => m.id === id)
    return (
        <div className="ListaInterprete_container">
            {mov.cast.map((int, index) => (
                <Interprete key={index} nombre={int.name} foto={int.photo}>
                    {int.description}
                </Interprete>
            ))}
        </div>
    )
}

export default ListaInterpretes
