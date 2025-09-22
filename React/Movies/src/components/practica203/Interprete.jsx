import React from "react"
import "./Interprete.css"

const Interprete = (props) => {
    
    return (
        <>
            <div className="interprete_container">
                <img
                    src={props.foto}
                    alt="imagen"
                    className="interprete_image"
                ></img>
                <div className="interprete_texto">
                    <h1 className="interprete_name">{props.nombre}</h1>
                    <p className="interprete_description">{props.children}</p>
                </div>
            </div>
        </>
    )
}

export default Interprete
