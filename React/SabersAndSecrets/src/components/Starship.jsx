import React from "react"
import "./Starship.css"

const Starship = ({ name, model, type }) => {
    return (
        <div className="starship-container">
            <h1>Name: {name}</h1>
            <h2>Model: {model}</h2>
            <h2>Type: {type}</h2>
        </div>
    )
}

export default Starship
