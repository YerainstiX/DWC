import React, { useRef } from "react"
import Interprete from "./Interprete.jsx"

const ListaInterpretes = (props) => {
    console.log(props.cast)
    return (
        <div className="ListaInterprete_container">
            {props.cast.map((int, index) => (
                <Interprete key={index} nombre={int.name} foto={int.photo}>
                    {int.description}
                </Interprete>
            ))}
        </div>
    )
}

export default ListaInterpretes
