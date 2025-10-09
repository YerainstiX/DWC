import React, { useState } from "react"
import matriculados from "../data/matriculados.json"
import Pupil from "./Pupil.jsx"

const Matricula = () => {
    const [pupils, setPupils] = useState(matriculados.discentes)
    /*
    I've tried adding this line "setPupils(matriculados.discentes)" at the beginning of every function, 
    but it doesn't work well, so I created an array that saves the original state of the list to apply the filters
    */
    const originalPupils = [...pupils]

    const only2Daw = () => {
        setPupils(
            originalPupils.filter((pupil) => pupil.curso.includes("2DAW"))
        )
    }

    const firstCourse = () => {
        setPupils(originalPupils.filter((pupil) => pupil.curso.startsWith("1")))
    }

    const onlyDaw = () => {
        setPupils(originalPupils.filter((pupil) => pupil.curso.includes("DAW")))
    }

    const hobbyRead = () => {
        setPupils(
            originalPupils.filter(
                (pupil) =>
                    pupil.aficiones.includes("lectura") ||
                    pupil.aficiones.includes("leer")
            )
        )
    }

    const orderLastName = () => {
        setPupils(
            [...originalPupils].sort((pupil1, pupil2) =>
                pupil1.apellidos.localeCompare(pupil2.apellidos)
            )
        )
    }

    const resetList = () => {
        setPupils(matriculados.discentes)
        originalPupils = [...pupils]
    }

    return (
        <>
            <div>
                <h1>List of Pupils</h1>
                <h2>Filters</h2>
                <button onClick={only2Daw}>2ºDAW Pupils</button>
                {pupils.length === 0 ? (
                    <p>The list is empty</p>
                ) : (
                    <div>
                        {pupils.map((pupil) => (
                            <Pupil data={pupil} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Matricula
