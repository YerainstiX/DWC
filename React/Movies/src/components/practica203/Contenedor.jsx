import React from "react"
import "./Contenedor.css"

const Contenedor = (props) => {
    return (
        <>
            <div className="contenedor_first">{props.children}</div>
        </>
    )
}

export default Contenedor
