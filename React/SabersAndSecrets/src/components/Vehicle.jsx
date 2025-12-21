import React from "react"
import "./Vehicle.css"

const Vehicle = ({ name, model, type }) => {
    return (
        <div className="vehicle-container">
            <h1>Name: {name}</h1>
            <h2>Model: {model}</h2>
            <h2>Type: {type}</h2>
        </div>
    )
}

export default Vehicle
