import React, { useState } from "react"
import "./listado.css"

const Listado = () => {
    const [numSummary, setNumber] = useState([])

    //Function to clear the state
    const resetSummary = () => {
        setNumber([])
    }
    //Check if the number is already in the state
    const numberExists = (n) => {
        return numSummary.includes(n)
    }

    const getRandomNumber = (max) => {
        return Math.floor(Math.random() * max)
    }

    //Function to add the number to the state using the function above numberExists()
    const addNumber = () => {
        const randomNumber = getRandomNumber(100)
        if (numSummary.length === 100) return null
        if (numberExists(randomNumber)) return addNumber()
        return setNumber([...numSummary, randomNumber])
    }

    return (
        <>
            <div className="listado_container">
                <p className="listado_p">List of Numbers</p>
                <div className="listado_buttons">
                    <button className="listado_addnumber" onClick={addNumber}>
                        Generate
                    </button>
                    <button
                        className="listado_deletelist"
                        onClick={resetSummary}
                    >
                        Delete
                    </button>
                </div>
                <ul className="listado_numberlist">
                    {numSummary.map((v, i, a) => (
                        <li key={i}>{v}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Listado
