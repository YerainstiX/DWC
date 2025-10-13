import React, { useState } from "react"
import matriculados from "../../data/matriculados.json"
import Pupil from "./Pupil.jsx"

const Matricula = () => {
    const [pupils, setPupils] = useState(matriculados.discentes)
    /*
    I've tried adding this line "setPupils(matriculados.discentes)" at the beginning of every function, 
    but it doesn't work well, so I created an array that saves the original state of the list to apply the filters
    */
    const [originalPupils, setOriginalPupils] = useState(matriculados.discentes)

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
        const updateList = originalPupils.filter((pupil) => pupil.id !== id)
        setPupils(updateList)
        setOriginalPupils(updateList)
    }

    return (
        <>
            <div>
                <h1>List of Pupils</h1>
                <h2>Filters</h2>
                <button onClick={only2Daw}>2ºDAW Pupils</button>
                <button onClick={firstCourse}>1st Course Pupils</button>
                <button onClick={onlyDaw}>DAW Pupils</button>
                <button onClick={hobbyRead}>Pupils that read</button>
                <button onClick={orderLastName}>Order by LastName</button>
                <button onClick={resetList}>Reset the List</button>
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
