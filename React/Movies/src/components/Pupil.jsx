import React, { useState } from "react"
import "./Pupil.css"
const Pupil = ({ data }) => {
    const { id, nombre, apellidos, curso, aficiones, comida } = data

    return (
        <>
            <div className="pupil_container">
                <p>ID: {id}</p>
                <p>
                    Name: {nombre} {apellidos}
                </p>
                <p>Course: {curso}</p>
                <p>Hobbies: {aficiones.join(", ")}</p>
                <p>Favorite food: {comida}</p>
            </div>
        </>
    )
}

export default Pupil
