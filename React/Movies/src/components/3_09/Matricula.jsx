import React, { useState } from "react"
import matriculados from "../../data/matriculados.json"
import Pupil from "./Pupil.jsx"
import "./Matricula.css"

const Matricula = () => {
    /*
    I've tried adding this line "setPupils(matriculados.discentes)" at the beginning of every function, 
    but it doesn't work well, so I created another state that saves the original state of the list to apply the filters
    */
    const [originalPupils, setOriginalPupils] = useState(matriculados.discentes)
    const [pupils, setPupils] = useState(matriculados.discentes)

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
        setOriginalPupils(matriculados.discentes)
    }

    const deletePupil = (id) => {
        const updateOriginalList = originalPupils.filter(
            (pupil) => pupil.id !== id
        )
        setOriginalPupils(updateOriginalList)

        const updateList = pupils.filter((pupil) => pupil.id !== id)
        setPupils(updateList)
    }

    return (
        <>
            <div>
                <h1>List of Pupils</h1>
                <h2>Filters</h2>
                <div className="matricula_botones">
                    <button onClick={only2Daw}>2ºDAW Pupils</button>
                    <button onClick={firstCourse}>1st Course Pupils</button>
                    <button onClick={onlyDaw}>DAW Pupils</button>
                    <button onClick={hobbyRead}>Pupils that read</button>
                    <button onClick={orderLastName}>Order by LastName</button>
                    <button onClick={resetList}>Reset the List</button>
                </div>
                {pupils.length === 0 ? (
                    <p>The list is empty</p>
                ) : (
                    <div>
                        {pupils.map((pupil) => (
                            <>
                                <Pupil data={pupil} />
                                <button onClick={() => deletePupil(pupil.id)}>
                                    Unenroll ID {pupil.id}
                                </button>
                            </>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Matricula
